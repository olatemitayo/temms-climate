import React from "react";
import withAuth from "@/components/protected-routes";
import CustomButton from "@/components/auth/button";
import Navbar from "@/components/navbar";
import SearchInput from "@/components/search-input";

function weather() {
  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.href = "/";
  // };

  return (
    <>
      <div>
        <Navbar />
        <SearchInput />
      </div>
    </>
  );
}

export default withAuth(weather);
