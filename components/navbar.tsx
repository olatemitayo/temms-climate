import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import Logo from "./common/logo";
import Link from "next/link";
import { UserDetails } from "@/pages/_app";
import { Burger, Button, Popover, Text } from "@mantine/core";

import SearchInput from "./search-input";

const sideItems = [
  {
    id: "1",
    img: "",
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    id: "2",
    img: "",
    title: "Map",
    link: "/map",
  },
  {
    id: "3",
    img: "",
    title: "Saved Location",
    link: "/location",
  },
];

const handleLogOut = () => {
  localStorage.clear();
  window.location.href = "/";
};
export default function Navbar() {
  const [title, setTitle] = useState<UserDetails>(null);
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setTitle(JSON.parse(localStorage.getItem("my-user") as string));
      console.log(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <>
      <div className="bg-[#f0eeee] ">
        <div className="mx-auto  flex justify-between items-center px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,16px)] max-w-[1500px]">
          <figure>
            <Logo />
          </figure>
          <ul className="flex gap-[clamp(8px,3vw,60px)] text-[clamp(12px,2vw,18px)] lg:text-[16px] whitespace-nowrap decoration-none text-[#1c1c1c]  cmd:hidden">
            {sideItems.map((item) => (
              <Link key={item?.id} href={item?.link}>
                <img src="" alt="" />
                <li key={item?.id}>{item?.title}</li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-2 cmd:hidden">
            <h2 style={{ fontFamily: "cursive" }} className="text-xl">
              Hi, {title?.data?.username}
            </h2>
            <Button
              className=" bg-[#2c3f7d] hover:bg-[#333d5f] "
              onClick={handleLogOut}
            >
              Log Out
            </Button>
          </div>
          <div className="items-center hidden gap-4 cmd:flex">
            <Popover width={100} position="left" shadow="md">
              <Popover.Target>
                <Burger opened={opened} onClick={toggle} aria-label={label} />
              </Popover.Target>
              <Popover.Dropdown>
                <ul
                  className="flex flex-col
                 gap-[clamp(8px,2vw,30px)] text-[clamp(10px,2vw,16px)] whitespace-nowrap text-[#1c1c1c]  "
                >
                  {sideItems.map((item) => (
                    <Link key={item?.id} href={item?.link}>
                      <img src="" alt="" />
                      <li key={item?.id}>{item?.title}</li>
                    </Link>
                  ))}
                </ul>
                {/* <h1>hii</h1> */}
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}