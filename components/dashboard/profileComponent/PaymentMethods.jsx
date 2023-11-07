"use client";

import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { PiLaptopFill } from "react-icons/pi";
import PaymentMethodsModal from "../../modals/PaymentMethodsModal";

export default function PaymentMethods() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <div onClick={onOpen} className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 transition-all hover:shadow-md">
        <div className="flex items-center gap-3">
          <div>
            <PiLaptopFill className="text-3xl text-[#142c8e]" />
          </div>
          <div className="max-w-[550px] text-left">
            <p className="text-sm text-[#001435]">
              Choose a funding source at checkout
            </p>
            <p className="max-w-[500px] text-sm font-bold text-[#0070E0]">
              Select
            </p>
          </div>
        </div>
      </div>
      <PaymentMethodsModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
