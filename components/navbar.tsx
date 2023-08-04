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
    title: "Saved ocation",
    link: "/location",
  },
  {
    id: "4",
    img: "",
    title: "Calender",
    link: "/calender",
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
      <div className="  bg-[#d0d7ee] flex justify-between items-center px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,16px)] ">
        <figure>
          <Logo />
        </figure>
        <ul className="flex gap-[clamp(8px,3vw,60px)] text-[clamp(12px,2vw,18px)] lg:text-[16px] whitespace-nowrap decoration-none text-[#2c3f7d] font-bold cmd:hidden">
          {sideItems.map((item) => (
            <Link key={item?.id} href={item?.link}>
              <img src="" alt="" />
              <li key={item?.id}>{item?.title}</li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-2 cmd:hidden">
          <SearchInput />
          <Button
            className=" bg-[#2c3f7d] hover:bg-[#2b3a6e] "
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </div>
        <div className="hidden cmd:flex">
          <Popover width={70} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Burger opened={opened} onClick={toggle} aria-label={label} />
            </Popover.Target>
            <Popover.Dropdown>
              <ul className="flex gap-[clamp(8px,3vw,60px)] text-[clamp(12px,2vw,18px)] lg:text-[16px] whitespace-nowrap decoration-none text-[#2c3f7d] font-bold cmd:hidden">
                {sideItems.map((item) => (
                  <Link key={item?.id} href={item?.link}>
                    <img src="" alt="" />
                    <li key={item?.id}>{item?.title}</li>
                  </Link>
                ))}
              </ul>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
    </>
  );
}
