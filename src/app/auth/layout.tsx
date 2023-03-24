import "server-only";
import { ReactNode } from "react";
import AuthNavbar from "@/components/UI/AuthNavbar/AuthNavbar";

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <AuthNavbar />
      {children}
    </div>
  );
}
