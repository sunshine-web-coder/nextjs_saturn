import React from "react";
import {
  RadioGroup,
  Radio,
  useRadio,
  VisuallyHidden,
  cn,
} from "@nextui-org/react";
import Image from "next/image";

export const CustomRadio = (props) => {
  const {
    Component,
    children,
    isSelected,
    description,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
  } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex w-full tap-highlight-transparent hover:opacity-70 active:opacity-50",
        "w-full cursor-pointer gap-4 rounded-lg border-2 border-default p-4 pb-3 pt-3",
        "data-[selected=true]:border-primary",
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <span {...getWrapperProps()}>
        <span {...getControlProps()} />
      </span>
      <div {...getLabelWrapperProps()}>
        {children && <span {...getLabelProps()}>{children}</span>}
        {description && (
          <span className="text-small text-foreground opacity-70">
            {description}
          </span>
        )}
      </div>
    </Component>
  );
};

export default function PaymentMethodsRadio() {
  return (
    <RadioGroup label="" defaultValue="saturnBalance">
      <CustomRadio value="saturnBalance">
        <div className="flex gap-3">
          <Image
            width={35}
            height={35}
            src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1698058480/Saturn/ivrlmgaulzra0fcoiiri.png"
            alt="saturn logo"
          />
          <p className="text-lg font-semibold text-[#333333]">
            Satutrn balance
          </p>
        </div>
        <p className="mt-2 text-base">
          If you don&apos;t have enough funds in your balance, we&apos;ll ask
          you to pick one of your other payments methods.
        </p>
      </CustomRadio>
      <CustomRadio value="masterCard">
        <div className="flex gap-3">
          <Image
            width={50}
            height={30}
            src="https://res.cloudinary.com/dmnmoupqh/image/upload/v1693839255/Saturn/ksxrd7panzz6dhintepo.png"
            alt="saturn logo"
          />
          <p className="text-lg font-semibold text-[#333333]">MasterCard</p>
        </div>
        <p className="mt-2 text-base">Debit ******</p>
      </CustomRadio>
    </RadioGroup>
  );
}
