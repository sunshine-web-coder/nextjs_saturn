"use client";

import { useDisclosure } from "@nextui-org/react";
import React from "react";
import { ImBlocked } from "react-icons/im";
import BlockedContactModal from "../../modals/BlockedContactModal";

export default function BlockedContact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="">
      <div className="mb-5 text-2xl font-normal text-[#001435]">
        Manage your privacy settings
      </div>

      <div
        onClick={onOpen}
        className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 transition-all hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div>
            <ImBlocked className="text-2xl text-[#00A9A4]" />
          </div>
          <div className="max-w-[550px] text-left">
            <p className="mb-1 text-lg text-[#001435]">Blocked contacts</p>
            <p className="max-w-[500px] text-sm text-[#001435]">
              Review and edit the people you previously blocked.
            </p>
          </div>
        </div>
      </div>
      <BlockedContactModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
