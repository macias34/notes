import Link from "next/link";
import { FC } from "react";
import { HTMLProps } from "react";

const IconButton: FC<HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <a
      onClick={onClick}
      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 p-3 ${className}`}
    >
      {children}
    </a>
  );
};

export default IconButton;
