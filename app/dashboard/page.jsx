import DashboardSwiper from "@/components/Slider/DashboardSwiper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  return (
    <div className="custom_container mx-auto flex flex-col md:flex-row">
      <div className="w-full p-2 pb-10 pt-0 md:w-[60%] md:p-7 md:pb-32">
        <div className="mb-3">
          <Link href="">
            <div className="flex items-center gap-3 rounded-xl border bg-white p-5 shadow-sm">
              <Image
                width={0}
                height={0}
                style={{ width: "20px", height: "auto" }}
                src="https://i.imgur.com/3sbdF7s.png"
                alt="mobile phone"
              />
              <div>
                <p>Confirm your mobile phone</p>
                <p>Make it easier to recover your password</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="">
            <div className="flex items-center gap-3 rounded-xl border bg-white p-5 shadow-sm">
              <Image
                width={0}
                height={0}
                style={{ width: "25px", height: "auto" }}
                src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1698058480/Saturn/ivrlmgaulzra0fcoiiri.png"
                alt="saturn logo"
              />
              <div>
                <p>Get the Saturn app</p>
                <p>Start doing more with Saturn.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mt-5">
          <DashboardSwiper />
        </div>
        <div className="mt-8 rounded-xl bg-white p-5 text-lg text-[#0c0c0d] shadow-sm">
          <p className="mb-4 font-semibold">Recent activity</p>
          <p>
            See when money comes in, and when it goes out. You’ll find your
            recent Saturn activity here.
          </p>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white p-7 md:w-[40%] md:rounded-none">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Card</h2>
        </div>
        <div className="mt-2 md:mt-5">
          <div className="flex items-start gap-3 md:items-center">
            <Image
              width={25}
              height={25}
              src="https://i.imgur.com/ffvs1TS.png"
              alt="imj77"
            />
            <p className="max-w-[500px] text-lg md:w-full">
              Shop and send payments more securely. Link your credit card now.
            </p>
            <br />
          </div>
          <div className="mt-2 md:mt-5">
            <Link
              href="/dashboard/link_your_card"
              className="text-lg font-semibold text-[#00A9A4] hover:underline"
            >
              Link a card
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
