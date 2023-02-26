"use client";
import StyledLink from "../StyledLink/StyledLink";
import { useSupabase } from "../../Supabase/SupabaseProvider/SupabaseProvider";

const Navbar = () => {
  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error);
  };

  return (
    <nav className="flex justify-center gap-5 p-5">
      {session ? (
        <>
          <StyledLink href="/" onClick={handleLogout}>
            Log out
          </StyledLink>
          <StyledLink href="/profile">Profile</StyledLink>
        </>
      ) : (
        <>
          <StyledLink href="/auth">Login</StyledLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
