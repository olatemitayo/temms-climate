import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [userObject, setUserObject] = useState(null);

    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const user = JSON.parse(localStorage.getItem("my-user"));
        if (!user) {
          router.push("/");
        } else {
        }
        setUserObject(user);
      };

      checkAuth();
    }, [router]);

    // Render the wrapped component if authenticated
    return userObject ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
