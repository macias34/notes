"use client";
import StyledLink from "../StyledLink/StyledLink";
import { useSupabase } from "../SupabaseProvider/SupabaseProvider";

const Navbar = () => {
  const { supabase, session } = useSupabase();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error);
  };

  return (
    <nav className="flex justify-end gap-5 border-b-2 border-secondary p-5 dark:border-primary  ">
      {session ? (
        <>
          <StyledLink href="/" onClick={handleLogout}>
            Log out
          </StyledLink>
          <StyledLink href="/profile">Profile</StyledLink>
        </>
      ) : (
        <>
          <StyledLink href="/auth/signin">Sign in</StyledLink>
          <StyledLink href="/auth/signup">Sign up</StyledLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
