import { TextInput } from "@mantine/core";
import { UserDetails } from "@/pages/_app";
import { useEffect, useState } from "react";
import CustomButton from "./auth/button";

export default function SearchInput() {
  const [title, setTitle] = useState<UserDetails>(null);
  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setTitle(JSON.parse(localStorage.getItem("my-user") as string));
      console.log(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <div className=" max-w-[1500px] mx-auto py-4 px-[clamp(20px,3vw,35px)] flex flex-col justify-center">
      <h2
        style={{ fontFamily: "cursive" }}
        className="text-[clamp(16px,3vw,30px)] cmd:flex hidden"
      >
        Wanna know the weather today {title?.data?.username}?
      </h2>
      <div className="flex gap-2 ">
        <TextInput
          placeholder="search location..."
          radius="md"
          size="lg"
          className=" w-[50%] md:w-full xl:w-[40%]"
        />
        <CustomButton text="search" />
      </div>
    </div>
  );
}
