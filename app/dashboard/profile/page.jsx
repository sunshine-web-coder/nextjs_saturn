import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./globals.module.scss";
import ProfileUploadForm from "@/components/auth/ProfileUploadForm";
import Language from "@/components/auth/Language";
import TimeZone from "@/components/auth/TimeZone";
import ConfirmChangeEmail from "@/components/dashboard/profileComponent/ConfirmChangeEmail";
import ChangePhoneNumber from "@/components/dashboard/profileComponent/ChangePhoneNumber";
import EditAddress from "@/components/dashboard/profileComponent/EditAddress";
import ChangeName from "@/components/dashboard/profileComponent/ChangeName";

export default function Profile() {
  return (
    <div className="flex flex-col gap-5 p-5 pt-10 md:flex-row">
      <div className="w-full">
        <div className="relative rounded-xl border bg-white">
          <div className="h-[140px] rounded-t-xl bg-[#00A9A4]">
            <div className="flex items-center justify-between rounded-t-xl p-6 pb-4 pt-4 text-2xl text-white">
              <div className="">Profile</div>
              <div className="text-sm">Joined in 2023</div>
            </div>
          </div>
          <div>
            <ProfileUploadForm />
          </div>
          <div className="h-[70px]"></div>
          <ChangeName />
        </div>
        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-5 text-2xl text-[#0c0c0d]">Account Options</div>
          <div className="mb-4">
            <Language />
          </div>
          <div>
            <TimeZone />
          </div>
          <div className="mt-8">
            <p className="mb-2 text-sm text-[#515354]">Nationality</p>
            <p className="text-lg text-[#0c0c0d]">Nigeria</p>
          </div>
          <div className="mt-8">
            <p className="mb-2 text-sm text-[#515354]">Merchant ID</p>
            <p className="text-lg text-[#0c0c0d]">E86PCF8XDRBFS</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ConfirmChangeEmail />
        <ChangePhoneNumber />
        <EditAddress />
      </div>
    </div>
  );
}
