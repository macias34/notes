import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/supabase/supabase-types";

export const createBrowserClient = () =>
  createBrowserSupabaseClient<Database>();
