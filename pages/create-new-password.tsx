import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import { PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CreateNewPassword() {
  return (
    <main className="bg-[#eadfd8] relative">
      <div className="absolute left-[10px] top-[10px]">
        <Logo />
      </div>
      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] ">
          <Link
            href="/verify"
            className="flex items-center absolute top-[60px] lg:top-[40px]   text-start sm:w-[85%] lg:w-[60%] text-[#4e4d4c]  "
          >
            <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#8F9198]">
              &lt; back
            </p>
          </Link>
          <div className="flex flex-col lg:h-[75%] my-auto   w-[100%]  h-[50vh]">
            <div>
              <AuthHeading
                heading="Create Password"
                paragraph="Create your new password"
              />
            </div>
            <div>
              <form
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <PasswordInput
                  placeholder="new password"
                  label="Password"
                  radius="md"
                  size="lg"
                  withAsterisk
                  required
                  classNames={{
                    label:
                      "   text-[#4e4d4c] font-normal text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] !text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />
                <PasswordInput
                  placeholder="confirm new password"
                  label="Confirm Password"
                  radius="md"
                  size="lg"
                  withAsterisk
                  required
                  classNames={{
                    label:
                      "   text-[#4e4d4c] font-normal text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] !text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />

                <Button text="Create new password" />
              </form>
            </div>
          </div>
        </div>
        <div className="w-[45%] md:hidden h-[100vh]">
          <Image
            src={"/sky.png"}
            width={1000}
            height={1000}
            className="!w-full !h-[100vh]"
            alt={"weather"}
          />
        </div>
      </div>
    </main>
  );
}