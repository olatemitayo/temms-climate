import React from "react";
import clsx from "clsx";

export default function Logo({ className }) {
  return (
    <div
      className={clsx(" text-[#2c3f7d] text-[clamp(16px,2vw,24px)]", className)}
    >
      Logo
    </div>
  );
}
