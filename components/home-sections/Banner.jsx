import { lora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./HomeSection.module.scss"
import CustomLink from "../CustomLink/CustomLink";

export default function Banner() {
  return (
    <div className="banner relative h-full bg-[#EDF9F9] pb-[80px] pt-[20px] md:pt-[80px]">
        <Image width={100} height={100} className="absolute top-0 hidden left-[50%]" src="https://i.imgur.com/OIq1cs7.png" alt="banner_pattern" />
        <Image width={100} height={100} className="absolute top-[50%] left-0 translate-y-[-50%]" src="https://i.imgur.com/NitFxUX.png" alt="banner_pattern" />
        <Image width={100} height={100} className="absolute bottom-0 right-0" src="https://i.imgur.com/j2wzWOp.png" alt="banner_pattern" />
        <Image width={100} height={100} className="absolute bottom-[100px] left-[50%]" src="https://i.imgur.com/ovfp9O9.png" alt="banner_pattern" />
      <div className="custom_container flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="w-full md:w-[50%]">
          <p className="mb-2 font-normal text-[#00a9a4]">
            Instant Money Transfer
          </p>
          <h1 className={`mb-5 text-3xl font-bold text-black md:text-5xl ${lora.className}`}>
            Do more for yourself and your business
          </h1>
          <p className="mb-9">
            Securely send money, manage your finances, enjoy cardless payment
            options, and visit that dream city with Saturn. It’s borderless.
            It’s simple. It’s fast. All from one app.
          </p>
          <div>
            <CustomLink path="/signup" text="Get started for free" />
          </div>
        </div>
        <div className={`w-full md:w-[50%] ${style.hero_img}`}>
          <Image width={520} height={520} src="https://i.imgur.com/lbbCoph.png" alt="hero_img" />
        </div>
      </div>
    </div>
  );
}
