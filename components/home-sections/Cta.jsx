import { lora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cta() {
  return (
    <div className="md:pt-[80px] border-b pt-[50px] md:pb-[80px] pb-[50px] bg-[#030734]">
      <div className="custom_container flex-col md:flex-row flex gap-5">
        <div className="w-full md:w-7/12">
          <h2 className={`text-center md:text-left font-bold text-2xl md:text-4xl text-white ${lora.className}`}>
          Manage your money in style. Use the app.
          </h2>
        </div>
        <div className="w-full md:w-5/12">
            <div className="flex items-center justify-center md:justify-end gap-5">
                <Link href="" className="">
                    <Image width={150} height={150} src="https://i.imgur.com/9Ya2gNU.png" alt="google play" />
                </Link>
                <Link href="" className="">
                    <Image width={150} height={150} src="https://i.imgur.com/oMNFypU.png" alt="apple store" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
