import React, { useEffect, useState } from "react";
import { UserDetails } from "./_app";
export default function Profile() {
  const [payload, setPayload] = useState<UserDetails>({
    email: "",
    username: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return <div>Profile</div>;
}
