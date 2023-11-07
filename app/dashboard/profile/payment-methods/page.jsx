import PaymentMethods from "@/components/dashboard/profileComponent/PaymentMethods";
import Image from "next/image";
import React from "react";

export default function PaymentMethodsPage() {
  return (
    <div className="mx-auto max-w-[700px] p-5 pt-6">
      <div>
        <div className="mb-10">
          <div className="mx-auto max-w-[100px]">
            <Image
              width={60}
              height={60}
              src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693823916/Saturn/bwi1mrzjwtrpwpdorhva.svg"
              alt="payment_methods"
            />
          </div>
          <div className="mx-auto mb-5 max-w-[200px] text-center text-4xl font-semibold">
            Payments
          </div>
          <div className="text-center">
            Choose a preferred way to pay, earn rewards, and do more.
          </div>
        </div>
        <div className="">
          <div className="mb-5 text-2xl font-normal text-[#001435]">
            Online purchases
          </div>

          <PaymentMethods />
        </div>
      </div>
    </div>
  );
}
