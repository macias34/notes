import Link, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  href,
  children,
  className,
}) => {
  return (
    <button
      className={`w-full rounded-md border-2 border-accent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-accent transition hover:bg-accent hover:text-primary ${className}`}
    >
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
