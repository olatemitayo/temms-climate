import CustomButton from "@/components/auth/button";
import React from "react";

export default function weather() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div>weather</div>
      <CustomButton
        onClick={handleLogout}
        className="!w-[300px]"
        text="Log out"
      />
    </>
  );
}
