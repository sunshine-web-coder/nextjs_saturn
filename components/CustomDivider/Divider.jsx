import React from "react";

export default function Divider({ className, style }) {
  const linkStyles = {
    withBgStyle: `border border-[#00A9A4]/20 w-full ${className}`,
  };

  const selectedStyle = linkStyles[style] || linkStyles.withBgStyle;

  return <div className={selectedStyle} />;
}
