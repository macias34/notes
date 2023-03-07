"use client";

import type { Session } from "@supabase/auth-helpers-nextjs";
import { createContext, useContext, useState } from "react";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createBrowserClient } from "@/utils/supabase-client";
import { Database } from "@/types/supabase";

type MaybeSession = Session | null;

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: MaybeSession;
};

// @ts-ignore
const Context = createContext<SupabaseContext>();

export default function SupabaseProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: MaybeSession;
}) {
  const [supabase] = useState(() => createBrowserClient());

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => useContext(Context);
