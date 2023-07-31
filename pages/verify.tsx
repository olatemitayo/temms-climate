import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { isNotEmpty, useForm } from "@mantine/form";
import { LoadingOverlay, Group, PinInput } from "@mantine/core";
import { toast } from "react-toastify";
import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import Image from "next/image";
import Link from "next/link";

interface VerifyProps {
  otp: string;
}

export default function Verify() {
  const [visible, setVisible] = useState(false);
  const [otp, setOtp] = useState<VerifyProps>({ otp: "" });
  const router = useRouter();

  const VerifyPin = (value: VerifyProps) => {
    axios
      .post(
        "",
        {
          email: router.query.email,
          otp: otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        if (res) {
          setVisible(true);
          router.push(`/create-new-password?email=${router.query.email}`);
          toast.success("Please create a new Password");
          setOtp(otp);
        }
      })
      .catch(function (error) {
        setVisible(false);
        toast.error(error);
      });
  };

  const form = useForm({
    initialValues: { otp: "" },

    // this validates the form
    validate: {
      otp: isNotEmpty(),
    },
  });
  return (
    <main className="bg-[#eadfd8] relative">
      <div className="absolute left-[10px] top-[10px]">
        <Logo />
      </div>

      <div className="h-[100vh]   mx-auto flex justify-between">
        <div className="md:w-full w-[50%] flex justify-between h-[100vh] flex-col py-[clamp(0.5rem,3vw,3rem)] px-[clamp(1rem,5vw,5rem)] relative">
          <Link
            href="/forgot-password"
            className="flex items-center absolute top-[60px] lg:top-[40px]   text-start sm:w-[85%] lg:w-[60%] text-[#4e4d4c]  "
          >
            <p className="text-[clamp(0.6rem,2vw,1rem)] text-[#8F9198]">
              &lt; back
            </p>
          </Link>
          <div className="flex flex-col lg:h-[75%] my-auto   w-[100%]  h-[50vh]">
            <div>
              <AuthHeading
                heading="Enter Verification Code"
                paragraph="We just sent a 4-digit code to your email address"
              />
            </div>
            <div>
              <form
                onSubmit={form.onSubmit((value) => {
                  VerifyPin(value);
                })}
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <Group position="center">
                  <PinInput
                    {...form.getInputProps("pin")}
                    classNames={{
                      input: "w-full h-[clamp(50px,7vw,104px)]",
                    }}
                  />
                </Group>

                <Button text="Reset Password" />
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
