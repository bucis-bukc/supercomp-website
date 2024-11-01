import { Registration } from "@/lib/models/Registeration";
import { Member } from "@/lib/models/Member";
import { connectDb } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";
import { MemberPayload } from "@/types/types";

export const POST = async (req: NextRequest) => {
  try {
    await connectDb();
    const {
      competitionName,
      payslip,
      members,
    }: {
      competitionName: string;
      payslip: string;
      members: MemberPayload[];
    } = await req.json();

    if (!competitionName || !payslip || !members)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );

    const createdMembers = await Promise.all(
      members.map(async (member, index) => {
        // Create the member document
        const createdMember = await Member.create(member);

        return {
          member: createdMember._id,
          isLeader: members[index].isLeader! || false,
        };
      })
    );

    const registration = await Registration.create({
      competitionName,
      payslip,
      members: createdMembers,
    });

    if (!registration)
      return NextResponse.json(
        { error: "Error creating registration" },
        { status: 500 }
      );

    // // Send email to all members
    await Promise.all(
      members.map(async (member) => {
        await sendMail({
          email: member.email,
          emailType: "REGISTRATION",
          id: registration.id,
        });
      })
    );

    return NextResponse.json({
      message: "Registeration successful",
      success: true,
      registration,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
