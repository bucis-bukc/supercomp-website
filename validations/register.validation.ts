import { z } from "zod";

const memberSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .min(1, { message: "Email is required*" })
    .email({ message: "Invalid email address" })
    .optional(),
  name: z
    .string({ message: "Full Name is required" })
    .min(1, { message: "Full Name is required*" })
    .optional(),
  institute: z
    .string({ message: "Institute Name is required" })
    .min(1, { message: "Institute Name is required*" })
    .optional(),
  phone: z
    .string({ message: "Phone number is required" })
    .min(1, { message: "Phone number is required*" })
    .max(14, "Invalid Phone number")
    .regex(/^[\d+-]+$/, {
      message: "Phone number should only contain digits, +, and -",
    })
    .optional(),
});

export const registerSchema = z.object({
  competitionName: z
    .string({ message: "Please select a competition*" })
    .min(1, { message: "Please select a competition*" }),
  payslip: z
    .string({ message: "Please provide payslip*" })
    .min(1, { message: "Please provide payslip*" }),
  members: z
    .array(memberSchema)
    .min(1, { message: "At least one member is required" })
    // .refine((members) => members[0] && Object.keys(members[0]).length > 0, {
    //   message: "At least one member is required",
    // }),
    .refine(
      (members) => {
        if (!members[0]) return false;
        const firstMember = members[0];
        return (
          !!firstMember.email?.trim() &&
          !!firstMember.name?.trim() &&
          !!firstMember.institute?.trim() &&
          !!firstMember.phone?.trim()
        );
      },
      {
        message: "Atleast one member is required",
        path: ["1"],
      }
    ),
});
