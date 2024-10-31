import { z } from "zod";

export const ambassadorSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .min(1, { message: "Email is required*" })
    .email({ message: "Invalid email address" }),
  name: z
    .string({ message: "Full Name is required" })
    .min(1, { message: "Full Name is required*" }),
  institute: z
    .string({ message: "Institute Name is required" })
    .min(1, { message: "Institute Name is required*" }),
  phone: z
    .string({ message: "Phone number is required" })
    .min(1, { message: "Phone number is required*" })
    .max(14, "Invalid Phone number")
    .regex(/^[\d+-]+$/, {
      message: "Invalid Phone number",
    }),
  cnic: z
    .string({ message: "CNIC is required" })
    .min(1, { message: "CNIC is required*" })
    .min(13, { message: "CNIC must have 13 digits" })
    .max(13, { message: "CNIC must have 13 digits" })
    .regex(/^[\d-]+$/, {
      message: "Invalid CNIC",
    }),
});
