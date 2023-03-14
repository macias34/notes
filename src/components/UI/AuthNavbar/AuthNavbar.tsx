"use client";
import StyledLink from "../StyledLink/StyledLink";

const AuthNavbar = () => {
  return (
    <nav className="flex justify-center gap-5 p-5">
      <StyledLink color="primary" href="/">
        home
      </StyledLink>
    </nav>
  );
};

export default AuthNavbar;
