"use client";

import React from "react";
import CloseAccount from "../../modals/CloseAccount";
import { Button, useDisclosure } from "@nextui-org/react";

export default function CloseYourAccount() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div>
        <Button
          startContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          }
          size="sm"
          onPress={onOpen}
          className="flex bg-transparent text-left w-full border p-[28px] text-lg text-[#00A9A4]"
          color="primary"
        >
          Close your account
        </Button>
      </div>
      <CloseAccount isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
