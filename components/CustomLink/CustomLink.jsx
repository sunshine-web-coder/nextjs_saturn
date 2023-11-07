import Link from "next/link";
import React from "react";

export default function CustomLink({ text, className, path, style }) {
  const linkStyles = {
    withBgStyle: `block w-[200px] rounded bg-[#00A9A4] hover:bg-[#00A9A4]/80 p-4 text-center text-lg font-semibold text-white ${className}`,
    noBgStyle: `block w-[200px] rounded bg-transparent hover:bg-[#ffffff]/80 text-[#00A9A4] border border-[#00A9A4] p-4 text-center text-lg font-semibold ${className}`,
    simpleStyle: `text-base hover:underline ${className}`,
  };

  const selectedStyle = linkStyles[style] || linkStyles.withBgStyle;

  return (
    <Link href={path} className={selectedStyle}>
      {text}
    </Link>
  );
}
