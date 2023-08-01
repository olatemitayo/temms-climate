import React from "react";
import withAuth from "@/components/protected-routes";
import CustomButton from "@/components/auth/button";

function weather() {
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

export default withAuth(weather);
