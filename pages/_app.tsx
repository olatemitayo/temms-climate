import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Dispatch, SetStateAction, useState, createContext } from "react";

export interface UserDetails {
  email?: string;
  username: string;
}

// export interface User {
//   email?: string;
//   username: string;
// }

export type ContextType = {
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
};

export const AuthContext = createContext<ContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserDetails | null>(null);

  let storeData = {
    user,
    setUser,
  };
  return (
    <AuthContext.Provider value={storeData}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
