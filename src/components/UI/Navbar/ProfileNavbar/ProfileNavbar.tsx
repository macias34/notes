"use client";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { FaStickyNote, FaUserCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiLogin } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ProfileNavbar = () => {
  const { supabase, session } = useSupabase();
  const pathname = usePathname();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error);
  };

  return (
    <nav className="flex items-center justify-center gap-14 p-5 text-3xl sm:gap-7 sm:text-2xl ">
      {session ? (
        <>
          <Link
            title="Home page"
            className="  transition hover:text-yellow focus:text-yellow"
            href="/"
          >
            <FaHome />
          </Link>

          <Link
            title="Profile"
            className={`  transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile" ? "text-yellow" : ""
            }`}
            href="/profile"
          >
            <FaUserCircle />
          </Link>
          <Link
            title="Notes"
            className={`  transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile/notes" ? "text-yellow" : ""
            }`}
            href="/profile/notes"
          >
            <FaStickyNote />
          </Link>
          <Link
            title="Add note"
            className={`  transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile/add-note" ? "text-yellow" : ""
            }`}
            href="/profile/add-note"
          >
            <BsFillPlusCircleFill />
          </Link>
          <i
            title="Sign out"
            className={`cursor-pointer   transition hover:text-yellow focus:text-yellow`}
            onClick={handleLogout}
          >
            <HiLogin />
          </i>
        </>
      ) : (
        <>
          <Link
            className="cursor-pointer   transition hover:text-yellow focus:text-yellow"
            href="/auth"
          >
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default ProfileNavbar;
