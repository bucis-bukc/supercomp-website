import { Ambassador } from "@/lib/models/Ambassador";
import { connectDb } from "@/lib/config/db";
import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

export const POST = async (req: NextRequest) => {
  try {
    await connectDb();
    const { name, email, phone, institute, cnic, picture } = await req.json();

    if (!name || !email || !phone || !institute || !cnic || !picture)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );

    // Check if ambassador already exists
    const ambassadorExists = await Ambassador.findOne({
      email,
    });

    if (ambassadorExists)
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      );

    const ambassador = await Ambassador.create({
      name,
      email,
      phone,
      institute,
      cnic,
      picture,
    });
    if (!ambassador)
      return NextResponse.json(
        { error: "Error creating ambassador" },
        { status: 500 }
      );

    await sendMail({ email, emailType: "AMBASSADOR", id: ambassador.id });

    return NextResponse.json({
      message: "Registeration successful",
      success: true,
      ambassador,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectDb();
    const ambassadors = await Ambassador.find();

    return NextResponse.json({
      message: "Ambassadors found",
      success: true,
      data: ambassadors,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
