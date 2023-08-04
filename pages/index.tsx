import React, { useState } from "react";
import axios from "axios";
import { isNotEmpty, useForm } from "@mantine/form";
import { ToastContainer, toast } from "react-toastify";
import { LoadingOverlay, PasswordInput, TextInput } from "@mantine/core";
import router from "next/router";
import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import Image from "next/image";
import Link from "next/link";
// import Slider from "@/components/slider";

interface UserProps {
  username: string;
  password: string;
}

export default function SignIn() {
  const [visible, setVisible] = useState(false);
  const [userDetails, setUserDetails] = useState<UserProps>({
    username: "",
    password: "",
  });
  const Login = async (value: UserProps) => {
    try {
      const response = await axios.post(
        "https://weatherapi-xlqh.onrender.com/api/login/",
        {
          username: value.username,
          password: value.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setVisible(true);
      if (response.data) {
        localStorage.setItem("my-user", JSON.stringify(response.data));
        toast.success("Welcome to your personalised weather app", {
          autoClose: 3000,
        });
        router.push("/weather");
        setUserDetails(userDetails);
      }
    } catch (error) {
      setVisible(false);
      toast.error("An error occured");
    }
  };

  const form = useForm({
    initialValues: { username: "", password: "" },

    //this validates the form
    validate: {
      username: (value) =>
        /^\S+@\S+$/.test(value) || value.length > 4
          ? null
          : "Invalid email" || value.length < 4
          ? "username must have at least 4 letters"
          : null,
      password: isNotEmpty(),
    },
  });
  return (
    <main className="bg-[#f0f0f0] relative">
      <ToastContainer toastClassName="customToast" />
      <div className="absolute left-[10px] top-[10px]">
        <Logo />
      </div>
      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] ">
          <div className="flex flex-col lg:h-[75%] my-auto   w-[100%]  h-[70vh]">
            <div>
              <AuthHeading
                heading="Sign In"
                paragraph="Enter your email and password to sign in!"
              />
            </div>
            <div>
              <form
                onSubmit={form.onSubmit((value) => {
                  Login(value);
                })}
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <TextInput
                  placeholder="enter your email or username"
                  {...form.getInputProps("username")}
                  label="Email/Username"
                  radius="md"
                  size="lg"
                  withAsterisk
                  classNames={{
                    label: "   text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />

                <PasswordInput
                  placeholder="enter your password"
                  {...form.getInputProps("password")}
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
                <div className="flex flex-row-reverse justify-between">
                  <Link href="/signup" className="text-end">
                    <p className="text-[#1c1c1c]  text-[12px]">
                      Dont have an account?{" "}
                      <span className="text-[#025162] font-bold">Sign Up</span>
                    </p>
                  </Link>
                  <Link href="/forgot-password" className="text-end">
                    <p className="text-[#2c3f7d] font-bold text-[12px]">
                      Forgot password?
                    </p>
                  </Link>
                </div>
                <Button text="Log in" type="submit" />
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
          {/* <Slider /> */}
        </div>
      </div>
      <LoadingOverlay visible={visible} overlayBlur={2} />
    </main>
  );
}
