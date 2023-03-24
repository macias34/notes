"use client";
import { useSupabase } from "../../Supabase/SupabaseProvider/SupabaseProvider";
import { FaStickyNote, FaUserCircle } from "react-icons/fa";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { HiLogin } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { supabase, session } = useSupabase();
  const pathname = usePathname();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error);
  };

  return (
    <nav className="flex items-center justify-center gap-14 p-5 ">
      {session ? (
        <>
          <Link
            title="Home page"
            className="text-3xl transition hover:text-yellow focus:text-yellow"
            href="/"
          >
            <FaHome />
          </Link>

          <Link
            title="Profile"
            className={`text-3xl transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile" ? "text-yellow" : ""
            }`}
            href="/profile"
          >
            <FaUserCircle />
          </Link>
          <Link
            title="Notes"
            className={`text-3xl transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile/notes" ? "text-yellow" : ""
            }`}
            href="/profile/notes"
          >
            <FaStickyNote />
          </Link>
          <Link
            title="Add note"
            className={`text-3xl transition hover:text-yellow focus:text-yellow ${
              pathname === "/profile/add-note" ? "text-yellow" : ""
            }`}
            href="/profile/add-note"
          >
            <BsFillPlusCircleFill />
          </Link>
          <i
            title="Sign out"
            className={`cursor-pointer text-3xl transition hover:text-yellow focus:text-yellow`}
            onClick={handleLogout}
          >
            <HiLogin />
          </i>
        </>
      ) : (
        <>
          <Link
            className="cursor-pointer text-3xl transition hover:text-yellow focus:text-yellow"
            href="/auth"
          >
            Login
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
