import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

interface AmbassadorDocument extends Document {
  name: string;
  email: string;
  phone: string;
  institute: string;
  cnic: string;
  picture: string;
}

const AmbassadorSchema = new Schema<AmbassadorDocument>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    index: true,
    lowercase: true,
    validate: validator.isEmail,
  },
  phone: { type: String, required: [true, "Phone is required"] },
  institute: { type: String, required: [true, "Institute Name is required"] },
  cnic: { type: String, required: [true, "CNIC Number is required"] },
  picture: { type: String, required: [true, "Profile picture is required"] },
});

export const Ambassador =
  mongoose.models.Ambassador ||
  mongoose.model<AmbassadorDocument>("Ambassador", AmbassadorSchema);
