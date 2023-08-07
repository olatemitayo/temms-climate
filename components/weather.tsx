import { UserDetails } from "@/pages/_app";
import React, { useEffect, useState } from "react";
import Clock from "./current-time";
import Rain from "./rain";
import Overview from "./overview";

export default function Weather() {
  const [title, setTitle] = useState<UserDetails>(null);
  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setTitle(JSON.parse(localStorage.getItem("my-user") as string));
      console.log(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <main className="">
      <div className="mx-auto  flex cmd:flex-col-reverse justify-between items-center px-[clamp(20px,3vw,40px)] py-[clamp(10px,2vw,16px)] max-w-[1500px] gap-4 ">
        <div className="w-[70%] cmd:w-[100%] max-h-[100%]    px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,16px)] border border-[#f0eeee] rounded-2xl">
          <div className="">
            <Overview />
          </div>
          <div className="mt-4">
            <img src="/sunny.svg" alt="" className="w-[40px]" />
            <div className="flex items-center justify-between">
              <h1 className="text-[48px]">20°C</h1>
              <div>
                <p>Dramatic</p>
                <p>Cloudy</p>
              </div>
            </div>
          </div>
          <div>
            <Rain />
          </div>
        </div>

        <div className="flex-1 cmd:w-[100%] max-h-[100%]  rounded-2xl bg-[#172658]  px-[clamp(20px,3vw,35px)] py-[clamp(10px,2vw,20px)] text-[#fff]">
          <div className="">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl ">{title?.data?.username}</h1>
                <p>Lagos, Nigeria</p>
              </div>
              <Clock />
            </div>
          </div>
          <div className="mt-4">
            <img src="/sunny.svg" alt="" className="w-[40px]" />
            <div className="flex items-center justify-between">
              <h1 className="text-[48px]">20°C</h1>
              <div>
                <p>Dramatic</p>
                <p>Cloudy</p>
              </div>
            </div>
          </div>
          <div>
            <Rain />
          </div>
        </div>
      </div>
    </main>
  );
}
