import { z } from "zod";

export const memberSchema = z.object({
  email: z.string({ message: "Email is required" }).optional(),
  name: z.string({ message: "Full Name is required" }).optional(),
  institute: z.string({ message: "Institute Name is required" }).optional(),
  phone: z.string({ message: "Phone number is required" }).optional(),
});
export const registerSchema = z.object({
  competitionName: z
    .string({ message: "Please select a competition*" })
    .min(1, { message: "Please select a competition*" }),
  payslip: z
    .string({ message: "Please provide payslip*" })
    .min(1, { message: "Please provide payslip*" }),
  members: z.array(memberSchema),
});
