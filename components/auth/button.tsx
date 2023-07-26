import React, { Component, ComponentProps } from "react";

interface ButtonProp extends ComponentProps<"button"> {
  text: string;
}
export default function Button(props: ButtonProp) {
  const { text, ...rest } = props;
  return (
    <div>
      <button
        className="w-full bg-[#025162] rounded-[8px] px-[clamp(1rem,2vw,1.5rem)] py-2 mt-[clamp(0.5rem,2vw,1.5rem)] text-[clamp(1rem,2vw,1.5rem)] text-white"
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
