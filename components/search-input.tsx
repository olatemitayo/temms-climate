import { TextInput } from "@mantine/core";
import { ComponentProps } from "react";

export default function SearchInput() {
  return (
    <TextInput
      placeholder="search location..."
      radius="xl"
      size="md"
      className="w-[clamp(220px,20vw,320px)]"
    />
  );
}
