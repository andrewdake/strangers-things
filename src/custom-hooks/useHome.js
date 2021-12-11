import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const buttons = [
  { name: "Signup", to: "/signup" },
  { name: "Login", to: "/login" },
];

export function useHome() {
  const { isLoggedIn } = useContext(AuthContext);

  return { isLoggedIn, buttons };
}
