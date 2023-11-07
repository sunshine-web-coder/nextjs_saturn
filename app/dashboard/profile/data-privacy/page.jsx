import BlockedContact from "@/components/dashboard/profileComponent/BlockedContact";
import DeleteDataAccount from "@/components/dashboard/profileComponent/DeleteDataAccount";
import React from "react";

export default function DataPrivacy() {
  return (
    <div className="mx-auto max-w-[700px] p-5 pt-6">
      <BlockedContact />
      <DeleteDataAccount />
    </div>
  );
}
