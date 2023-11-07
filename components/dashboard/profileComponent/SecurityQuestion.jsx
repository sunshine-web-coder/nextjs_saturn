"use client";

import React from "react";
import { useDisclosure } from "@nextui-org/react";
import { TbMessage2Question } from "react-icons/tb";
import SecurityQuestionFormModal from "../../modals/SecurityQuestionForm";

export default function SecurityQuestion() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div
        onClick={onOpen}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 transition-all hover:shadow-md"
      >
        <div className="flex gap-3">
          <div>
            <TbMessage2Question className="text-2xl text-[#00A9A4]" />
          </div>
          <div className="max-w-[550px] text-left">
            <p className="mb-1 text-lg text-[#001435]">Security questions</p>
            <p className="text-sm text-[#001435]">
              For your protection, please choose 2 security questions. This way,
              we can verify it&apos;s really you if there&apos;s ever a doubt.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="text-xl font-semibold text-[#00A9A4]">Create</button>
        </div>
      </div>
      <SecurityQuestionFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
