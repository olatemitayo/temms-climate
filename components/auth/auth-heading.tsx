import React, { ComponentProps } from "react";

interface AuthHeadingProps extends ComponentProps<"div"> {
  heading: string;
  paragraph?: string;
}

export default function AuthHeading({
  heading,
  paragraph,
  ...rest
}: AuthHeadingProps) {
  return (
    <div>
      <h1
        className="text-[#121212] text-center text-[clamp(1.2rem,5vw,2rem)] font-bold"
        {...rest}
      >
        {heading}
      </h1>
      <p className="text-[#4e4d4c] text-center text-[clamp(0.8rem,2vw,1.15rem)]">
        {paragraph}
      </p>
    </div>
  );
}
