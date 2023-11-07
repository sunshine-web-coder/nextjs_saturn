import { featureWrapData } from "@/constants";
import Image from "next/image";
import style from "./HomeSection.module.scss";
import { lora } from "@/app/fonts";

export default function FeatureWrap() {
  return (
    <div className="bg-[#161942] pb-[50px] pt-[50px] md:pb-[80px] md:pt-[80px]">
      <div className="custom_container">
        <div className="mb-[40px] text-center">
          <span className="text-base font-medium text-[#00A9A4]">
            Ready to level up your money management?
          </span>
          <h2
            className={`mt-[10px] text-2xl font-bold text-[hsla(0,0%,100%,.8)] md:text-4xl ${lora.className}`}
          >
            Follow these steps to get started
          </h2>
        </div>
        <div className="mx-auto flex max-w-[900px] flex-col flex-wrap justify-between gap-4 md:flex-row">
          {featureWrapData.map((feature) => (
            <div
              className={`w-full rounded-md p-[25px] shadow-[0_0_25px_rgba(85,85,85,.1)] md:w-[400px] ${style.featureWrap}`}
              key={feature.id}
            >
              <div className="mb-[18px] flex gap-3">
                <span className="p-2 font-bold text-[#00A9A4]">
                  {feature.id}
                </span>
                <span className={`p-3 ${style.featureWrapSpan}`}>
                  <Image width={100} height={100} src={feature.img} alt="featureWrap image" />
                </span>
                <div className="w-[300px]">
                  <h3 className="text-xl font-semibold text-[hsla(0,0%,100%,.8)]">
                    {feature.title}
                  </h3>
                </div>
              </div>
              {/* <p className="text-[hsla(0,0%,100%,.8)] text-base">{feature.text}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
