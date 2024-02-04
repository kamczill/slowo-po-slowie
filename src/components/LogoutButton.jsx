import React from "react";
import { useAuth } from "../contexts/authContext";

const LogoutButton = () => {
    const { logout } = useAuth()
  return (
      <button className="rounded-xl bg-[#303030] px-6 py-2 text-lg text-white md:py-[6px]" onClick={logout}>
        Wyloguj się
      </button>
  );
};

export default LogoutButton;
