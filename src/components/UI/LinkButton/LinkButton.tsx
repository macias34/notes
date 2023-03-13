import Link, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";
import { ButtonColor } from "../Button/Button";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  className,
  color,
}) => {
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
    <button className={`button ${className}`}>
      <Link
        className={`flex h-full w-full items-center justify-center ${getButtonColor}`}
        href={href}
      >
        {children}
      </Link>
    </button>
  );
};

export default LinkButton;
