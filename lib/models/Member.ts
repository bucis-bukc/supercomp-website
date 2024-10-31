import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

export interface MemberDocument extends Document {
  name: string;
  email: string;
  phone: string;
  institute: string;
}

const MemberSchema = new Schema<MemberDocument>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    index: true,
    lowercase: true,
    validate: validator.isEmail,
  },
  phone: { type: String, required: true },
  institute: { type: String, required: [true, "Institute name is required"] },
});

export const Member =
  mongoose.models.Member ||
  mongoose.model<MemberDocument>("Member", MemberSchema);
