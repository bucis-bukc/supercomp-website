import nodemailer from "nodemailer";
import { Registration } from "./models/Registeration";
import { Ambassador } from "./models/Ambassador";
import { IAmbassador, IMember, IRegisterations } from "@/types/types";

interface SendProps {
  email: string;
  emailType: "AMBASSADOR" | "REGISTRATION" | "REMINDER";
  id: string;
}

export const sendMail = async ({ email, emailType, id }: SendProps) => {
  try {
    let ambassador: IAmbassador | null = null;
    let registration: any;

    if (emailType === "AMBASSADOR") {
      ambassador = await Ambassador.findById(id);
    } else if (emailType === "REGISTRATION") {
      registration = await Registration.findById(id).populate({
        path: "members",
        model: "Member",
        select: "email name",
      });
    }

    const transporter = await nodemailer.createTransport({
      pool: true,
      service: "gmail",
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const subject =
      emailType === "AMBASSADOR"
        ? "Welcome OnBoard"
        : emailType === "REGISTRATION"
        ? "Registration Successful"
        : "Reminder";

    const html =
      emailType === "AMBASSADOR" && ambassador
        ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #333333;">Welcome Onboard!</h1>
    </div>
    
    <div style="margin-bottom: 20px;">
        <p style="font-size: 16px; line-height: 1.5; color: #444444;">
            Dear ${ambassador.name},
        </p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #444444;">
            Congratulations! We are thrilled to welcome you as an Ambassador representing ${ambassador.institute}. Your role as an Ambassador for our event is crucial, and we're excited to have you on board.
        </p>
        
        <p style="font-size: 16px; line-height: 1.5; color: #444444;">
            We'll be reaching out to you soon with more details about your role and responsibilities.
        </p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eeeeee; color: #666666; font-size: 14px;">
        <p>Best regards,</p>
        <p>Team Supercomp</p>
    </div>
</div>
        `
        : emailType === "REGISTRATION"
        ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #333333;">Registration Successful!</h1>
    </div>
    
    <div style="margin-bottom: 20px;">
        <p style="font-size: 16px; line-height: 1.5; color: #444444;">
            Thank you for registering for ${registration.competitionName}!
        </p>
        
        <div style="background-color: #f8f8f8; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h2 style="color: #333333; margin-bottom: 15px;">Team Details</h2>
            
            ${registration.members
              .map(
                (member: IMember) => `
                <div style="margin-bottom: 10px;">
                    <strong>${
                      member.isLeader ? "Team Leader" : "Team Member"
                    }:</strong>
                    <span>${member.name}</span>
                    <span style="color: #666666;"> (${member.email})</span>
                </div>
            `
              )
              .join("")}
        </div>
        
        <p style="font-size: 16px; line-height: 1.5; color: #444444;">
            We'll keep you updated with further information about the competition.
        </p>
    </div>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eeeeee; color: #666666; font-size: 14px;">
        <p>Best regards,</p>
        <p>Team Supercomp</p>
    </div>
</div>
        `
        : `<p>Reminder</p>`;

    const mailOptions = {
      from: "danosiddiqui203@gmail.com",
      to: email,
      html: html,
      subject: subject,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
