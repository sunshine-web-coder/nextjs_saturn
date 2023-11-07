import { Input } from "@/components/input/Input";
import Link from "next/link";
import React from "react";
import style from "./HomeSection.module.scss"
import SelectCurrency from "./SelectCurrency";
import CustomButton from "@/components/button/CustomButton";
import CustomLink from "../CustomLink/CustomLink";

export default function ChargeForm() {
  return (
    <div className="bg-[#010647] pb-[50px] pt-[50px] md:pb-[80px] md:pt-[80px]">
      <div className="custom_container">
        <form className="charge_form">
          <div className="relative flex flex-col items-center gap-6 md:flex-row">
            <div className="relative w-full gap-3 md:w-1/3">
              <Input
                label="You Send Money"
                type="number"
                placeholder="$1000"
                className={style.charge_form}
              />
              <div className="absolute right-1 top-[38px] w-[90px]">
                <SelectCurrency />
              </div>
            </div>

            <div className="relative w-full gap-3 md:w-1/3">
              <Input
                label="You Send Money"
                type="number"
                placeholder="$1000"
                className={style.charge_form}
              />
              <div className="absolute right-1 top-[38px] w-[90px]">
                <SelectCurrency />
              </div>
            </div>

            <div className="mt-9 w-full md:w-1/3">
              <CustomButton
                type="button"
                text="Get Estimation"
                style="withBgStyle"
                className="w-full text-base"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col items-start gap-2 text-base text-[hsla(0,0%,100%,.8)] md:flex-row md:items-center">
            <p>
              <span className="font-semibold text-white">82.50</span> Exchange
              Rate <span className="font-semibold text-white">$5.50</span>{" "}
              Transition Fees
            </p>
            {/* <Divider type="vertical" className="border-[hsla(0,0%,100%,.8)] hidden md:block h-3 relative top-[2px]" /> */}
            <p>
              By clicking continue, I am agree with{" "}
              <CustomLink path="/ruxa/terms-of-service"text="Terms & Policy" style="simpleStyle" className="text-[#00A9A4]" />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
