"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

const AuthNavbar = () => {
  return (
    <nav className="flex justify-center gap-5 p-5">
      <Link
        title="Home page"
        className="text-3xl transition hover:text-yellow sm:text-2xl"
        href="/"
      >
        <FaHome />
      </Link>
    </nav>
  );
};

export default AuthNavbar;
