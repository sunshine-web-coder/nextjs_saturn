import Link from "next/link";
import Image from "next/image";
import { ourServicesData } from "@/constants";
import style from "./HomeSection.module.scss"
import { lora } from "@/app/fonts";

export default function OurServices() {
  return (
    <div className="md:pt-[80px] pt-[50px] our_services md:pb-[80px] pb-[50px] bg-[#ffffff]">
      <div className={`custom_container ${style.our_services_in}`}>
        <div className="text-center">
            <span className="text-base font-medium text-[#00A9A4]">Our Services</span>
            <h2 className={`text-black font-bold mt-[10px] text-2xl md:text-4xl ${lora.className}`}>Everything you need to stay ahead of the curve</h2>
        </div>
        <div>
            <div className={`mt-[40px] ${style.our_services_grid}`}>
            <Image width={100} height={100} className={`${style.service_shape_one} ${style.hidden}`} src="https://i.imgur.com/rYz17CL.png" alt="ourservice pattern" />
            <Image width={100} height={100} className={`${style.service_shape_two} ${style.hidden}`} src="https://i.imgur.com/tef4DrY.png" alt="ourservice pattern" />
                {ourServicesData.map((ourServices, i) => (
                <div className="w-[100%] border flex shadow-[0_0_25px_rgba(85,85,85,.1)] flex-col lg:flex-row flex-[0_0_auto] bg-[#ffffff] p-6 our_service_m rounded-xl" key={i}>
                    <div className={`flex items-center justify-center ${style.service_icon}`}>
                        <Image width={100} height={100} className="max-w-[50px]" src={ourServices.img} alt="bulb" />
                    </div>
                    <div className="ml-[25px] w-full service_text">
                        <h3 className={`text-xl text-black font-bold mb-[12px] ${lora.className}`}>{ourServices.title}</h3>
                        <p className="text-base text-[#666666]">
                            {ourServices.text}
                        </p>
                        <div className="mt-3">
                          <Link href={ourServices.slug} className="text-[#00A9A4] text-base hover:underline">{ourServices.slugText}</Link>
                        </div>
                    </div>
                </div>   
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
