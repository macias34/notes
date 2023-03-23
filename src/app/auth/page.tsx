"use client";

import Auth from "@/components/Auth/Auth";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
export const revalidate = 0;

const AuthPage = () => {
  const { supabase } = useSupabase();
  return (
    <div className="absolute bottom-1/2 right-1/2 flex translate-x-1/2 translate-y-1/2 flex-col items-center gap-10">
      <Auth supabase={supabase} />
    </div>
  );
};

export default AuthPage;
