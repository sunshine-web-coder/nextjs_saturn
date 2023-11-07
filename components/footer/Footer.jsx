"use client";

import { footerNavLinkData, socialLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname();

  const isHideHomeFooter = pathname === "/reset-password";
  const hideHomeFooter = !isHideHomeFooter;
  return (
    <>
      {hideHomeFooter && (
        <div className="mt-20 border-t bg-[#ffffff] pb-[30px] pt-[30px]">
          <div className="custom_container">
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="mr-8 w-full md:w-4/6">
                <div className="text-4xl font-bold text-[#00A9A4]">Saturn</div>
                <p className="mb-[30px] mt-[27px] text-base text-[black]">
                  On the other hand, we denounce whteous indig nation and
                  dislike men wh beguiled moraized er hand consec teturus adipis
                  iscing elit eiusmod tempordunt labore dolore magna aliqua
                  consector tetur adip iscing.
                </p>
              </div>
              {footerNavLinkData.map((section, index) => (
                <div key={index} className="w-full md:w-3/12">
                  <h3 className="mb-2 text-xl font-semibold text-[#00A9A4]">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {section.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <Link
                          className="hover:text-[#00A9A4] hover:underline"
                          href={child.url}
                        >
                          {child.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap-reverse items-center justify-between gap-5 border-t pt-5">
              <div className="md:w-4/12">
                © 2023 Saturn Digital Services Limited.
              </div>
              <div className="md:w-3/12">
                {socialLinks.map((section, index) => (
                  <div key={index} className="flex w-full items-center gap-3">
                    <h3 className="text-base">{section.title}</h3>
                    <ul className="flex items-center gap-2">
                      {section.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <Link
                            href={child.url}
                            className="flex rounded-full bg-[#00A9A4] p-[5px] text-[22px] text-white hover:bg-[#00A9A4]/80"
                          >
                            {child.icon}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
