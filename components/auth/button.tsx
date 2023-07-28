import React, { ComponentProps, Ref } from "react";
import { Button as MantineButton } from "@mantine/core";

interface ButtonProp extends ComponentProps<"button"> {
  text?: string;
}

export default function CustomButton(props: ButtonProp) {
  const { text, ...rest } = props;
  const buttonRef: Ref<HTMLButtonElement> = React.createRef();

  return (
    <div>
      <MantineButton
        size="lg"
        radius="md"
        {...rest}
        ref={buttonRef}
        className=" w-full bg-[#025162] !font-normal "
      >
        {text}
      </MantineButton>
    </div>
  );
}
