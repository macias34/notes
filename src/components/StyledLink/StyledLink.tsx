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
    <Link onClick={onClick} href={href} className="">
      {children}
    </Link>
  );
};

export default StyledLink;
