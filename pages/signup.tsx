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

interface AccountProps {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

export default function CreateAccount() {
  const [visible, setVisible] = useState(false);
  const [userDetails, setUserDetails] = useState<AccountProps>({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const Register = async (value: AccountProps) => {
    try {
      const response = await axios.post(
        "https://weatherapi-xlqh.onrender.com/api/register/",
        {
          email: value.email,
          username: value.username,
          password: value.password,
          confirm_password: value.confirm_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        localStorage.setItem("my-user", JSON.stringify(response.data));
        setVisible(true);
        toast.success("Account successfully created", { autoClose: 2000 });
        toast.success("Please Sign In");
        router.push("/");
        console.log(response.data);
        setUserDetails(userDetails);
      }
    } catch (error) {
      setVisible(false);
      toast.error("Error creating account. Please try again later.");
      console.log(error);
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    },

    // this validates the form
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      username: (value) =>
        value.length < 4 ? "username must have at least 4 letters" : null,
      password: isNotEmpty(),
      confirm_password: isNotEmpty(),
    },
  });
  return (
    <main className="bg-[#eadfd8] relative">
      <ToastContainer toastClassName="customToast" />
      <div className="absolute left-[10px] top-[10px]">
        <Logo />
      </div>
      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] ">
          <div className="flex flex-col lg:h-[75%] my-auto   w-[100%]  h-[80vh]">
            <div>
              <AuthHeading heading="Create Account" />
            </div>
            <div>
              <form
                onSubmit={form.onSubmit((value) => {
                  Register(value);
                })}
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <TextInput
                  placeholder="enter your email address"
                  label="Email Address"
                  {...form.getInputProps("email")}
                  radius="md"
                  size="lg"
                  withAsterisk
                  classNames={{
                    label: "   text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />
                <TextInput
                  placeholder="enter your username"
                  label="Username"
                  {...form.getInputProps("username")}
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
                  label="Password"
                  {...form.getInputProps("password")}
                  radius="md"
                  size="lg"
                  autoComplete="off"
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
                  placeholder="confirm your password"
                  label="Confirm Password"
                  {...form.getInputProps("confirm_password")}
                  radius="md"
                  size="lg"
                  autoComplete="off"
                  withAsterisk
                  required
                  classNames={{
                    label:
                      "   text-[#4e4d4c] font-normal text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] !text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />
                <Link href="/" className="text-end">
                  <p className="text-[#e87d4d]  text-[12px]">
                    Have an account?{" "}
                    <span className="text-[#025162] font-bold">Sign In</span>
                  </p>
                </Link>

                <Button text="Create Account" type="submit" />
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
      <LoadingOverlay visible={visible} overlayBlur={2} />
    </main>
  );
}
