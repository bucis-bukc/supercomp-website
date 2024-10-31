import mongoose, { Document, Schema } from "mongoose";
import { MemberDocument } from "./Member";

interface RegistrationDocument extends Document {
  competitionName: string;
  payslip: string;
  members: MemberDocument[];
}

const RegistrationSchema = new Schema<RegistrationDocument>({
  competitionName: {
    type: String,
    required: [true, "Competition Name is required"],
  },
  payslip: { type: String, required: [true, "Pay slip is required"] },
  members: [
    {
      member: { type: Schema.Types.ObjectId, ref: "Member", isLeader: Boolean },
    },
  ],
});

export const Registration =
  mongoose.models.Registration ||
  mongoose.model<RegistrationDocument>("Registration", RegistrationSchema);
