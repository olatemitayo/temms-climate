import React, { ComponentProps, Ref } from "react";
import { Button as MantineButton } from "@mantine/core";

interface ButtonProp extends ComponentProps<"button"> {
  text?: string;
}

export default function CustomButton({ text, ...rest }: ButtonProp) {
  // const { text, ...rest } = props;
  const buttonRef: Ref<HTMLButtonElement> = React.createRef();

  return (
    <div>
      <MantineButton
        size="lg"
        radius="md"
        {...rest}
        ref={buttonRef}
        className=" w-full bg-[#2c3f7d] hover:bg-[#2b3a6e]   "
      >
        {text}
      </MantineButton>
    </div>
  );
}
