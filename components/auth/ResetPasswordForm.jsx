"use client";

import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Button, Input } from "@nextui-org/react";
import Divider from "../CustomDivider/Divider";
import { useForm, Controller } from "react-hook-form";
import Link from "next/link";

export default function ResetPasswordForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data) => {
    alert("Password reset successfully");
  };

  return (
    <div className="custom_container h-screen">
      <div className="mx-auto max-w-[500px] pt-[100px] ">
        <div className="mb-8 text-center text-2xl font-bold text-[#00A9A4]">
          You want to reset your password?
        </div>
        <p className="mb-3 text-left text-base font-medium">
          Enter your new password
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]{8,}$/,
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <BsFillEyeFill className="pointer-events-none text-2xl text-default-400" />
                    ) : (
                      <BsFillEyeSlashFill className="pointer-events-none text-2xl text-default-400" />
                    )}
                  </button>
                }
              />
            )}
          />
          {errors.password && (
            <div className="mt-2 text-red-500">
              {errors.password.type === "required" ? (
                "Password is required"
              ) : (
                <ul className="list-disc pl-8">
                  <li>Your password must be at least 8 characters long.</li>
                  <li>
                    It must contain a mix of uppercase and lowercase letters.
                  </li>
                  <li>
                    It should include at least one special character (e.g., !,@,
                    #, $).
                  </li>
                  <li>You must also use at least one number (0-9).</li>
                </ul>
              )}
            </div>
          )}
        </div>

          <div>
            <Button
              type="submit"
              className="block h-12 w-full rounded-lg bg-[#00A9A4] text-lg font-semibold text-white hover:bg-[#00A9A4]/80"
            >
              Reset
            </Button>
          </div>
          <div className="flex w-full items-center justify-between gap-2 text-[#00A9A4]">
            <Divider />
            <span>OR</span>
            <Divider />
          </div>
          <div className="flex flex-col text-lg font-normal text-[#00A9A4] items-center gap-4">
            <Link
              href="/login"
              className="block max-w-max p-0 hover:underline"
            >
              I&apos;ve remembered my password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
