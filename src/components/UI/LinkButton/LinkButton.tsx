import Link, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  className,
}) => {
  return (
    <button className={`button ${className}`}>
      <Link
        className="flex h-full w-full items-center justify-center"
        href={href}
      >
        {children}
      </Link>
    </button>
  );
};

export default LinkButton;
