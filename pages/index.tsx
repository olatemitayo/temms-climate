import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import { PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Carousel from "@/components/auth/carousel";

export default function Login() {
  return (
    <main className="bg-[#eadfd8] ">
      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] ">
          <div>
            <Logo />
          </div>
          <div className="flex flex-col  w-[100%]  h-[80vh]">
            <div>
              <AuthHeading
                heading="Sign In"
                paragraph="Enter your email and password to sign in!"
              />
            </div>
            <div>
              <form
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <TextInput
                  placeholder="enter your username"
                  label="Username"
                  radius="md"
                  size="lg"
                  withAsterisk
                  classNames={{
                    label: "text-[clamp(1rem,2vw,1.5rem)]   text-[#4e4d4c]",
                    input: "focus:border-[#eadfd8] text-[#4e4d4c]  ",
                  }}
                />
                <PasswordInput
                  placeholder="enter your password"
                  label="Password"
                  radius="md"
                  size="lg"
                  withAsterisk
                  required
                  classNames={{
                    label: "text-[clamp(1rem,2vw,1.5rem)]   text-[#4e4d4c]",
                    input: "focus:border-[#eadfd8]  text-[#4e4d4c]   ",
                  }}
                />
                <Button text="Log in" />
              </form>
            </div>
          </div>
        </div>
        <div className="w-[40%] md:hidden h-[100vh]">
          <Carousel />
        </div>
      </div>
    </main>
  );
}
