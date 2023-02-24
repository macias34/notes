import "server-only";
import { ReactNode } from "react";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      {children}
    </div>
  );
}
