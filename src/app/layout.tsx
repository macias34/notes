import "server-only";

import "../styles/globals.css";
import SupabaseProvider from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import SupabaseListener from "@/components/Supabase/SupabaseListener/SupabaseListener";
import { ReactNode } from "react";
import { createServerClient } from "../supabase/supabase-server";
import ThemeToggle from "@/components/UI/ThemeToggle/ThemeToggle";
import Navbar from "@/components/UI/Navbar/Navbar";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className="dark">
      <head />
      <body className="bg-primary text-secondary dark:bg-secondary dark:text-primary">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Navbar />
          <ThemeToggle />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
