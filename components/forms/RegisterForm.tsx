"use client";
import { registerforCompetition } from "@/API/register.api";
import { convertImage } from "@/lib/helpers";
import {
  registerSchema,
  memberSchema,
} from "@/validations/register.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { setErrorMap, z } from "zod";
import { Input } from "./Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { comeptitionNames } from "@/lib/data";
import { ActionButton } from "../helpers";
import { PayslipInput } from "./PayslipInput";
import isEmail from "validator/lib/isEmail";
import { isMobilePhone } from "validator";

export const RegisterForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [payslip, setPayslip] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: registerforCompetition,
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const validateMembers = (
    members: {
      email?: string | undefined;
      name?: string | undefined;
      institute?: string | undefined;
      phone?: string | undefined;
    }[]
  ): { message: string; path: string }[] => {
    const firstMember = members[0];
    const otherMembers = members.slice(1);

    // Check if the first member contains all the fields
    const errorFirstMember: { path: string; message: string }[] = [];
    for (const field in firstMember) {
      if (!(firstMember as any)[field]) {
        errorFirstMember.push({
          message: `${field} is required`,
          path: `members.0.${field}`,
        });
      }
    }

    const error: { path: string; message: string }[] = [];
    let index = 1;
    for (const member of otherMembers) {
      let isAnyFieldFilled = false;
      let isAllFieldsFilled = true;
      let err: { path: string; message: string } | null = null;
      for (const field in member) {
        if ((member as any)[field]) {
          isAnyFieldFilled = true;
        } else {
          isAllFieldsFilled = false;
          err = {
            path: `members.${index}.${field}`,
            message: `${field} must be filled`,
          };
        }
        err && error.push(err);
      }
      index++;
      const final = [];
      if (isAnyFieldFilled && !isAllFieldsFilled) {
        final.push(...error);
      }
      return [...final, ...errorFirstMember];
    }
    return [];
  };

  const onSubmit: SubmitHandler<z.infer<typeof registerSchema>> = async (
    data
  ) => {
    const { members, ...rest } = data;
    const errors = validateMembers(members);
    if (errors && errors.length > 0) {
      errors.forEach((err) => {
        setError(err.path as any, { message: err.message });
      });
      return;
    }

    const isValidEmailAndPhone = members.every((member, index) => {
      if (!isEmail(member.email ?? "")) {
        setError(`members.${index}.email`, { message: "Invalid email" });
        return false;
      }
      if (!isMobilePhone(member.phone ?? "", "en-PK")) {
        setError(`members.${index}.phone`, { message: "11 digits max" });
        return false;
      }
      return true;
    });

    if (!isValidEmailAndPhone) return;
    const filteredMembers = members.filter((member) => {
      let isFilled = false;
      for (const field in member) {
        if ((member as any)[field]) {
          isFilled = true;
        } else {
          isFilled = false;
          break;
        }
      }
      return isFilled;
    });
    const { response, success } = await mutateAsync({
      ...data,
      members: filteredMembers as any,
      payslip,
    });
    if (success) {
      toast.success("Thank you for your submission");
      setPayslip("");
      setFile(null);
      reset();
    } else return toast.error(response as string);
  };

  const competitionName = watch("competitionName");
  const payslipImage = watch("payslip");

  const selectedCompetition = comeptitionNames.find(
    (comp) => comp.name === competitionName
  );
  const maxMembers = selectedCompetition?.maxMembers || 1;

  const memberIndices = Array.from({ length: maxMembers }, (_, i) => i);

  const handleCompetitionChange = (value: string) => {
    reset();
    setFile(null);
    setPayslip("");
    setValue("competitionName", value);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-4 relative max-w-5xl mx-auto mt-10"
    >
      <div className="relative w-full group z-0 flex">
        <Select onValueChange={handleCompetitionChange}>
          <SelectTrigger className="w-full ">
            <SelectValue placeholder="Select Competition" />
          </SelectTrigger>
          <SelectContent className="bg-bg">
            {comeptitionNames.map((comp, idx: number) => (
              <SelectItem
                key={idx}
                value={comp.name}
                className="hover:bg-bg/80"
              >
                {comp.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {competitionName && (
        <div className="space-y-8 w-full relative">
          <div className="">
            <PayslipInput
              placeholder="Upload Payslip"
              name={`payslip`}
              register={register}
              setFile={setFile}
              setImage={setPayslip}
              setValue={setValue}
              image={payslip}
              isError={payslip ? false : !!errors.payslip}
              errorMessage={errors.payslip?.message}
            />
          </div>
          {memberIndices.map((memberIndex) => (
            <div key={memberIndex} className="space-y-4">
              <h3 className="section-title font-bold text-2xl md:text-3xl lg:text-4xl text-left">
                Member {memberIndex + 1}{" "}
                {memberIndex === 0 && <span className="text-red-500">*</span>}
              </h3>
              <div className="w-full flex items-center justify-between gap-4">
                <div className="relative w-full">
                  <Input
                    placeholder="Name"
                    type="text"
                    name={`members[${memberIndex}].name`}
                    register={register}
                    isError={!!errors.members?.[memberIndex]?.name}
                    errorMessage={errors.members?.[memberIndex]?.name?.message}
                  />
                </div>

                <div className="relative w-full">
                  <Input
                    placeholder="Email"
                    type="email"
                    name={`members[${memberIndex}].email`}
                    register={register}
                    isError={!!errors.members?.[memberIndex]?.email}
                    errorMessage={errors.members?.[memberIndex]?.email?.message}
                  />
                </div>
              </div>

              <div className="w-full flex items-center justify-between gap-4">
                <div className="relative w-full">
                  <Input
                    placeholder="Phone Number"
                    type="text"
                    name={`members[${memberIndex}].phone`}
                    register={register}
                    isError={!!errors.members?.[memberIndex]?.phone}
                    errorMessage={errors.members?.[memberIndex]?.phone?.message}
                  />
                </div>

                <div className="relative w-full">
                  <Input
                    placeholder="Institute"
                    type="text"
                    name={`members[${memberIndex}].institute`}
                    register={register}
                    isError={!!errors.members?.[memberIndex]?.institute}
                    errorMessage={
                      errors.members?.[memberIndex]?.institute?.message
                    }
                  />
                </div>
              </div>
            </div>
          ))}
          <ActionButton
            type="submit"
            className="py-3 sm:text-lg mt-4 w-full"
            btnText="Register"
            disabled={isSubmitting}
          />
        </div>
      )}
    </form>
  );
};
