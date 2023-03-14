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
      {true ? (
        <>
          <StyledLink color="primary" href="/" onClick={handleLogout}>
            Log out
          </StyledLink>
          <StyledLink color="primary" href="/profile">
            Profile
          </StyledLink>
          <StyledLink color="primary" href="/profile/notes">
            Notes
          </StyledLink>
          <StyledLink color="primary" href="/profile/add-note">
            New note
          </StyledLink>
        </>
      ) : (
        <>
          <StyledLink color="primary" href="/auth">
            Login
          </StyledLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
