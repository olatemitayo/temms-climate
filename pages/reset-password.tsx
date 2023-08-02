import React, { useState } from "react";
import axios from "axios";
import { isNotEmpty, useForm } from "@mantine/form";
import { LoadingOverlay, PasswordInput } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/auth/button";
import AuthHeading from "@/components/auth/auth-heading";
import Logo from "@/components/common/logo";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

interface CreateNewPasswordProps {
  new_password: string;
  confirm_password: string;
}

export default function CreateNewPassword() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState<CreateNewPasswordProps>({
    new_password: "",
    confirm_password: "",
  });
  const router = useRouter();

  const newPass = async (value: CreateNewPasswordProps) => {
    try {
      const response = await axios.post(
        "https://weatherapi-xlqh.onrender.com/api/reset-password/",
        {
          email: router.query.email,
          new_password: value.new_password,
          confirm_password: value.confirm_password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        setVisible(true);
        toast.success("Password reset complete");
        setPassword(password);
        router.push("/");
      }
    } catch (error) {
      setVisible(false);
      toast.error("An error occured, please try again");
    }
  };

  const form = useForm({
    initialValues: { new_password: "", confirm_password: "" },

    validate: {
      new_password: isNotEmpty(),
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
          <Link
            href="/verify"
            className="flex items-center absolute top-[80px]  text-start sm:w-[85%] lg:w-[60%] text-[#4e4d4c]  "
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
                onSubmit={form.onSubmit((value) => {
                  newPass(value);
                })}
                action=""
                className="mt-[clamp(2rem,5vw,5rem)] flex flex-col gap-[clamp(1rem,2vw,2rem)] w-full"
              >
                <PasswordInput
                  {...form.getInputProps("new_password")}
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
                  {...form.getInputProps("confirm_password")}
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

                <Button text="Create new password" type="submit" />
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
