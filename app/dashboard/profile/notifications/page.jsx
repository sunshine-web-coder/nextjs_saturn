import NotificationSettings from "@/components/dashboard/profileComponent/NotificationSettings";
import Image from "next/image";
import React from "react";
import { MdMarkEmailRead, MdPhone } from "react-icons/md";

export default function NotificationPage() {
  return (
    <div className="mx-auto max-w-[700px] p-5 pt-6">
      <div className="mb-10">
        <div className="mx-auto max-w-[100px]">
          <Image
            width={70}
            height={70}
            src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693839936/Saturn/s0ymaemncgk6ebkuwuok.svg"
            alt="notification"
          />
        </div>
        <div className="mx-auto mb-5 max-w-[200px] text-center text-4xl font-semibold">
          Notifications
        </div>
        <div className="text-center">
          Choose how you want to get updates about your payments, low balance,
          and relevant marketing updates.
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="mb-2 flex w-full rounded-xl border bg-white p-5 transition-all hover:shadow-md md:mb-6">
          <div className="flex gap-3">
            <div>
              <MdMarkEmailRead className="text-3xl text-[#00A9A4]" />
            </div>
            <div className="max-w-[550px] text-left">
              <p className="text-sm text-[#545D68]">Email</p>
              <p className="max-w-[500px] text-lg text-[#001435]">
                testemail@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex w-full rounded-xl border bg-white p-5 transition-all hover:shadow-md">
          <div className="flex gap-3">
            <div>
              <MdPhone className="text-3xl text-[#00A9A4]" />
            </div>
            <div className="max-w-[550px] text-left">
              <p className="text-sm text-[#545D68]">Phone</p>
              <p className="max-w-[500px] text-lg text-[#001435]">
                08087556094
              </p>
            </div>
          </div>
        </div>
      </div>
      <NotificationSettings />
    </div>
  );
}
