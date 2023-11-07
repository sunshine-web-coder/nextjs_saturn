"use client";

import Image from "next/image";
import Link from "next/link";
import { register } from "swiper/element/bundle";
register();

// import required modules
import CustomLink from "../CustomLink/CustomLink";
import { useEffect, useRef } from "react";
import { DashboardSwiperData } from "@/constants/dashboard";

export default function DashboardSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      // These are new...
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            // padding: 3px 6px;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            font-size: 6px;
            color: #00A9A4;
          }
          .swiper-button-next svg, 
          .swiper-button-prev svg{
            width: 20px;
            height: 20px;
          }
          .swiper-pagination-bullet{
            background-color: white;
          }
          .swiper-horizontal > 
          .swiper-pagination-bullets, 
          .swiper-pagination-bullets.swiper-pagination-horizontal, 
          .swiper-pagination-custom, .swiper-pagination-fraction{
            display: none;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container ref={swiperRef} init="false" className="bg-[#00A9A4]">
      {DashboardSwiperData.map((item, i) => (
        <swiper-slide key={i}>
          <div
            className={`rounded-2xl border bg-[#00A9A4] p-6 pt-1 text-white shadow-sm`}
          >
            <div className="mx-auto pl-8 pr-8 max-w-[500px]">
              <div className="flex flex-col justify-between">
                <div className="mb-5 flex items-center justify-center">
                  <Image
                    width={400}
                    height={400}
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="mb-2 text-center text-3xl">{item.title}</div>
                <div className="text-center text-lg">{item.desc}</div>
                <div className="mt-3 pb-5">
                  <CustomLink
                    text={item.slugLabel}
                    path={item.slug}
                    style="noBgStyle"
                    className="mt-5 w-full rounded-full border border-white p-4 pb-3 pt-3 text-center font-bold text-[#ffffff] hover:border-white/20 hover:bg-white/20"
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      ))}
    </swiper-container>
  );
}
