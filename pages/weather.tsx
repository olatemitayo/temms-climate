import React from "react";
import withAuth from "@/components/protected-routes";
import CustomButton from "@/components/auth/button";
import Navbar from "@/components/navbar";

function weather() {
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.href = "/";
  // };

  return (
    <>
      <div></div>
      <Navbar />
    </>
  );
}

export default withAuth(weather);
