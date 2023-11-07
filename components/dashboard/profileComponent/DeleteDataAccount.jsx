"use client";

import { useDisclosure } from "@nextui-org/react";
import React from "react";
import DeleteDataAccountModal from "../../modals/DeleteDataAccountModal";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function DeleteDataAccount() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mt-20">
      <div className="mb-5 text-2xl font-normal text-[#001435]">
        Manage your data
      </div>

      <div
        onClick={onOpen}
        className="mb-6 flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 transition-all hover:shadow-md"
      >
        <div className="flex items-center gap-3">
          <div>
            <RiDeleteBin6Fill className="text-2xl text-[#00A9A4]" />
          </div>
          <div className="max-w-[550px] text-left">
            <p className="mb-1 text-lg text-[#001435]">
              Delete your data / close account
            </p>
            <p className="max-w-[500px] text-sm text-[#001435]">
              Ask us to delete your data. To do this, we&apos;ll also need to
              close your account.
            </p>
          </div>
        </div>
      </div>
      <DeleteDataAccountModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
