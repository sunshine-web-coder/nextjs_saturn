"use client";

import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import Divider from "../CustomDivider/Divider";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("Login successfully");
  };

  return (
    <div className="custom_container">
      <div className="mx-auto max-w-[500px] pt-[40px]">
      <div className="mb-8 text-center text-2xl font-bold text-[#00A9A4]">
          Forgot the email you use for Saturn?
        </div>
        <p className="mb-5 text-left text-base font-medium">
          Enter the addresses you may have used to create your Saturn account.
          We’ll check to find a match.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Email Address"
                  type="email"
                  variant="bordered"
                />
              )}
            />
            {errors.email && (
              <div className="mt-2 text-red-500">{errors.email.message}</div>
            )}
          </div>
          <div>
            <Button
              type="submit"
              className="block h-12 w-full rounded-lg bg-[#00A9A4] text-lg font-semibold text-white hover:bg-[#00A9A4]/80"
            >
              Submit
            </Button>
          </div>
          <div className="flex w-full items-center justify-between gap-2 text-[#00A9A4]">
            <Divider />
            <span>OR</span>
            <Divider />
          </div>
          <div className="flex flex-col text-lg font-normal text-[#00A9A4] items-center gap-4">
            <Link
              href="/forgot_password"
              className="block max-w-max p-0 hover:underline"
            >
              I&apos;ve remembered my email
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
