"use client";
import Link from "next/link";
import { ReactNode, FC, MouseEventHandler } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler;
}

const StyledLink: FC<LinkProps> = ({ children, href, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href={href}
      className="rounded-2xl border-2 border-secondary px-6 py-3 font-semibold tracking-wide text-secondary transition hover:border-accent hover:bg-accent hover:text-primary dark:border-primary "
    >
      {children}
    </Link>
  );
};

export default StyledLink;
