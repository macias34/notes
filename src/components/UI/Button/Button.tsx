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
    <button onClick={onClick} type={type} className={`button ${className} `}>
      {children}
    </button>
  );
};

export default Button;
