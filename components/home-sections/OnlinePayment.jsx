import { lora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomLink from "../CustomLink/CustomLink";

export default function OnlinePayment() {
  return (
    <div className="pb-[50px] pt-[50px] md:pb-[80px] md:pt-[80px]">
      <div className="custom_container flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <div className="w-full md:w-[50%]">
          <div>
            {/* <span className="text-lg text-[#00A9A4] font-medium">
              Online Shopping
            </span> */}
            <h2 className={`mb-3 mt-2 text-2xl font-bold text-black md:text-4xl ${lora.className}`}>
              Get more out of your money. Become a Saturnian.
            </h2>
            <p className="text-base text-[#666666]">
              We’ve made online payment and money management easier and better
              for you. Now, with one tap, you can do much more with your money,
              report taxes, and see your financial activities in real time.
            </p>
          </div>
          {/* <div className="mt-6">
            <ul className="text-[#030734] flex flex-col gap-4 text-lg font-medium">
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>Cards that work all across the world.</span></li>
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>Highest Returns on your investments.</span></li>
                <li className="flex gap-3"><TbChecks className="text-[#00A9A4]" /><span>No ATM fees. No minimum balance. No overdrafts.</span></li>
            </ul>
          </div> */}
          <div className="mt-6">Ready to launch into space?</div>
          <div className="mt-8">
            <CustomLink path="/" text="Steady your rocket" />
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <Image
            width={520}
            height={520}
            src="https://vue.hibootstrap.com/ruxa/img/shopping-1.917e9419.png"
            alt="online payment image"
          />
        </div>
      </div>
    </div>
  );
}
