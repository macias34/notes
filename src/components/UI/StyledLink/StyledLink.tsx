"use client";
import Link from "next/link";
import { ReactNode, FC, MouseEventHandler } from "react";
import { ButtonColor } from "../Button/Button";

interface LinkProps {
  children: ReactNode;
  href: string;
  onClick?: MouseEventHandler;
  color: ButtonColor;
}

const StyledLink: FC<LinkProps> = ({ children, href, onClick, color }) => {
  const getButtonColor = (color: ButtonColor) => {
    switch (color) {
      case "green":
        return "btn__green";

      case "red":
        return "btn__red";

      case "yellow":
        return "btn__yellow";
      default:
        break;
    }
  };

  return (
    <Link
      onClick={onClick}
      href={href}
      className={`btn ${getButtonColor(color)}`}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
