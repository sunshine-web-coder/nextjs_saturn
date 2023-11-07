import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MessagesPage() {
  return (
    <div className="h-full bg-[#ffffff] pb-20 pt-20">
      <div className="mx-auto max-w-[900px]">
        <div className="">
          <div className="flex flex-wrap-reverse items-center justify-between gap-2">
            <div className="mb-5 text-2xl sm:mb-0">Message</div>
            <div>
              Need help?
              <Link href="" className="text-lg text-[#00A9A4]">
                 Ask the Saturn Assistant
              </Link>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center">
            <Image
              width={150}
              height={150}
              src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693849399/Saturn/tw4xuzeqbmj4gc7laclh.png"
              alt="message center"
            />
            <p className="text-2xl">
              You&apos;re all set! <br /> No Messages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
