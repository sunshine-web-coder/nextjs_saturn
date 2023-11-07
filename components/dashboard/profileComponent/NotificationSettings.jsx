"use client";

import React from "react";
import { Switch } from "@nextui-org/react";

export default function NotificationSettings() {
  return (
    <div className="mt-10">
      <div className="mb-3 text-2xl font-normal text-[#001435]">Payments</div>

      <div className="mb-5 text-lg text-[#001435]">
        We’ll let you know when you
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex w-full cursor-pointer flex-col rounded-xl border bg-white p-4 text-lg text-[#001435] transition-all hover:shadow-md">
          <div className="mb-3">Request a payment</div>
          <div className="notification_checkbox">
            <Switch defaultSelected size="md">
              <span className="ml-2 text-lg">Email</span>
            </Switch>
          </div>
        </div>

        <div className="flex w-full cursor-pointer flex-col rounded-xl border bg-white p-4 text-lg text-[#001435] transition-all hover:shadow-md">
          <div className="mb-3">Have a problem with a payment</div>
          <div className="notification_checkbox">
            <Switch defaultSelected size="md">
              <span className="ml-2 text-lg">Email</span>
            </Switch>
          </div>
        </div>

        <div className="flex w-full cursor-pointer flex-col rounded-xl border bg-white p-4 text-lg text-[#001435] transition-all hover:shadow-md">
          <div className="mb-3">Receive a payment</div>
          <div className="notification_checkbox">
            <Switch defaultSelected size="md">
              <span className="ml-2 text-lg">Email</span>
            </Switch>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-3 text-2xl font-normal text-[#001435]">Social</div>

        <div className="mb-3 flex w-full cursor-pointer items-center justify-between rounded-xl border bg-white p-4 text-lg text-[#001435] transition-all hover:shadow-md">
          <div className="">
            <div className="mb-3">
              <p className="mb-1">Chat</p>
              <p className="text-sm">
                We&apos;ll let you know when you get new messages
              </p>
            </div>
            <div className="notification_checkbox">
              <Switch defaultSelected size="md">
                <span className="ml-2 text-lg">Email</span>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
