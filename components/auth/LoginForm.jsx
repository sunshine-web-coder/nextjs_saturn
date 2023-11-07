"use client";

import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
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
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit = (data) => {
    alert("Login successfully");
  };

  return (
    <div className="custom_container">
      <div className="mx-auto max-w-[500px] pt-[40px]">
        <div className="mb-8 text-center text-2xl font-bold text-[#00A9A4]">
          Login to your account
        </div>
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
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: "Password is required",
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
              <div className="mt-2 text-red-500">{errors.password.message}</div>
            )}
          </div>
          
          <div>
            <Link
              href="/forgot_password"
              className="text-base text-[#00A9A4] hover:underline"
            >
              Forgotten password?
            </Link>
          </div>
          <div>
            <Button type="submit" className="block w-full rounded-lg bg-[#00A9A4] h-12 text-lg font-semibold text-white hover:bg-[#00A9A4]/80">
              Log In
            </Button>
          </div>
          <div className="flex w-full items-center justify-between gap-2 text-[#00A9A4]">
            <Divider />
            <span>OR</span>
            <Divider />
          </div>
          <div>
            <Link
              href="/signup"
              className="block w-full rounded-lg border border-[#00A9A4] bg-transparent p-4 pb-3 pt-3 text-center text-base font-semibold text-[#00A9A4] hover:bg-[#ffffff]/80 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
