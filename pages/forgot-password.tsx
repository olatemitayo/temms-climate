import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import { useForm } from "@mantine/form";
import { ToastContainer, toast } from "react-toastify";
import { LoadingOverlay, TextInput } from "@mantine/core";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import router from "next/router";

interface ForgotPasswordProps {
  email: string;
}

export default function ForgotPassword() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState<ForgotPasswordProps>({ email: "" });

  const Email = async (value: ForgotPasswordProps) => {
    try {
      const response = await axios.post(
        "https://weatherapi-xlqh.onrender.com/api/forgot-password/",
        { email: value.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setVisible(true);
        localStorage.setItem("my-user", JSON.stringify(response.data));
        toast.success("OTP sent, please check your email");
        router.push(`/verify?email=${value.email}`);
        setEmail(email);
      }
    } catch (error) {
      setVisible(false);
      toast.error(error);
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
    },
    // this validates the form
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <main className="bg-[#f0f0f0] relative">
      <ToastContainer toastClassName="customToast" />
      <div className="absolute left-[10px] top-[10px]">
        <Logo />
      </div>

      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] relative">
          <Link
            href="/"
            className="flex items-center absolute top-[80px] text-start sm:w-[85%] lg:w-[60%] text-[#4e4d4c]  "
          >
            <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#8F9198]">
              &lt; Back to sign in
            </p>
          </Link>
          <div className="flex flex-col lg:h-[50%] my-auto   w-[100%]  h-[50vh]">
            <div>
              <AuthHeading
                className="whitespace-nowrap text-[#121212] text-center text-[clamp(1.2rem,5vw,2rem)] font-bold"
                heading="Forgot Your Password"
                paragraph="No worries, you just need to type your email address and we will send the verification code"
              />
            </div>
            <div>
              <form
                onSubmit={form.onSubmit((value) => {
                  Email(value);
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
                    label:
                      "text-[#4e4d4c] font-normal text-[clamp(0.8rem,2vw,1.15rem)]",
                    input:
                      "focus:border-[#eadfd8] text-[#4e4d4c] text-[clamp(0.8rem,2vw,1.15rem)]  ",
                  }}
                />

                <Button text="Reset Password" type="submit" />
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
