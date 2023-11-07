import ChangePassword from "@/components/dashboard/profileComponent/ChangePassword";
import SecurityQuestion from "@/components/dashboard/profileComponent/SecurityQuestion";
import Image from "next/image";
import React from "react";

export default function Security() {
  return (
    <div className="mx-auto max-w-[750px] p-5 pt-6">
      <div className="flex flex-col items-center justify-center">
        <Image
          width={60}
          height={60}
          src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693718353/Saturn/tsplnwvinagmqmntcyiv.png"
          alt="security"
        />
        <div className="text-4xl text-[#001435]">Security</div>
      </div>
      <div className="mt-8 flex flex-col gap-5">
        <ChangePassword />
        <SecurityQuestion />
      </div>
    </div>
  );
}
