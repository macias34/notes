import "server-only";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-start">{children}</div>
  );
}
