"use client"

import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import EditAddressFormModal from "../../modals/EditAddressForm";

export default function EditAddress() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mt-7 min-h-[180px] rounded-xl border bg-[#ffffff] p-6 pb-3">
      <div className="mb-5 flex items-center justify-between text-2xl text-white">
        <div className="text-[#0c0c0d]">Address</div>
      </div>
      <div className="mb-4 mt-5 flex justify-between text-sm text-[#515354]">
        <p className="text-lg text-[#0c0c0d]">
          Opposite quality barber, agbowo <br />
          Ibadan <br /> OYO STATE 121101
        </p>
        <div>
          <Button
            endContent={
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            }
            size="sm"
            onPress={onOpen}
            className="bg-transparent p-0 text-sm text-[#00A9A4]"
            color="primary"
          >
            Edit
          </Button>
        </div>
      </div>
      <EditAddressFormModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
