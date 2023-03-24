"use client";

import { usePathname } from "next/navigation";
import AuthNavbar from "./AuthNavbar/AuthNavbar";
import ProfileNavbar from "./ProfileNavbar/ProfileNavbar";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname?.startsWith("/auth")) return <AuthNavbar />;
  if (pathname?.startsWith("/profile")) return <ProfileNavbar />;
  return <div className="sr-only"></div>;
};

export default Navbar;
