"use client";

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import ChangePasswordFormModal from "../../modals/ChangePasswordForm";
import { RiLockPasswordLine } from "react-icons/ri";

export default function ChangePassword() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 transition-all hover:shadow-md"
      >
        <div className="flex gap-3">
          <div>
            <RiLockPasswordLine className="text-2xl text-[#00A9A4]" />
          </div>
          <div className="max-w-[550px] text-left">
            <p className="mb-1 text-lg text-[#001435]">Change password</p>
            <p className="text-sm text-[#001435]">
              Create or update your password
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="text-xl font-semibold text-[#00A9A4]">Update</button>
        </div>
      </div>
      <ChangePasswordFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
