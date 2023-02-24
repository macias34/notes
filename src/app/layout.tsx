import "server-only";

import Notification from "@/components/Notification/Notification";
import "../styles/globals.css";
import SupabaseProvider from "@/components/SupabaseProvider/SupabaseProvider";
import SupabaseListener from "@/components/SupabaseListener/SupabaseListener";
import { ReactNode } from "react";
import { createServerClient } from "../utils/supabase-server";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";

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
          <ReduxProvider>
            <Notification />
            {children}
          </ReduxProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
