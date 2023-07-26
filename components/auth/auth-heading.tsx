import React from "react";

interface AuthHeadingProps {
  heading: string;
  paragraph?: string;
}

export default function AuthHeading({ heading, paragraph }: AuthHeadingProps) {
  return (
    <div>
      <h1 className="text-[#e87d4d] text-[clamp(1.2rem,5vw,3rem)] font-bold">
        {heading}
      </h1>
      <p className="text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.5rem)]">
        {paragraph}
      </p>
    </div>
  );
}
