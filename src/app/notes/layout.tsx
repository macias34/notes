import "server-only";

import { ReactNode } from "react";
import Navbar from "@/components/UI/Navbar/Navbar";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="flex">{children}</div>
    </>
  );
}
