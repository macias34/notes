import Link from "next/link";
import { FC } from "react";
import { HTMLProps } from "react";

interface Props {
  type: "submit" | "button";
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`w-fit rounded-md border-2 border-accent px-10 py-3 text-sm font-semibold uppercase tracking-wide text-accent outline-none transition hover:bg-accent hover:text-primary ${className} focus:bg-accent focus:text-primary `}
    >
      {children}
    </button>
  );
};

export default Button;
