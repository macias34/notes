"use client";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
export const revalidate = 0;

const AuthPage = () => {
  const { supabase } = useSupabase();
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      theme="dark"
    />
  );
};

export default AuthPage;
