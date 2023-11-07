"use client";

import { Button } from "@nextui-org/react";

export default function CustomButton({
  type,
  onClick,
  text,
  className,
  style,
  disabled,
}) {
  const linkStyles = {
    withBgStyle: `block p-7 pl-10 pr-10 flex items-center justify-center w-[172px] rounded bg-[#00A9A4] hover:bg-[#00A9A4]/80 text-center text-white ${className}`,
    noBgStyle: `block p-2 h-[50px] w-[172px] rounded bg-transparent text-[#333333] border border-[#00A9A4] p-4 text-center text-lg font-semibold text-white ${className}`,
  };

  const selectedStyle =
    style === "noBgStyle" ? linkStyles.noBgStyle : linkStyles.withBgStyle;

  return (
    <Button
      type={type}
      className={`${disabled ? selectedStyle : selectedStyle}`}
      onClick={onClick}
      disabled={disabled}
      color="primary"
    >
      {disabled ? "loading..." : text}
    </Button>
  );
}
