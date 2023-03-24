"use client";

import Auth from "@/components/Auth/Auth";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { motion } from "framer-motion";
export const revalidate = 0;

const AuthPage = () => {
  const { supabase } = useSupabase();
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      className="absolute bottom-1/2 right-1/2 flex translate-x-1/2 translate-y-1/2 flex-col items-center gap-10 overflow-hidden"
    >
      <Auth supabase={supabase} />
    </motion.div>
  );
};

export default AuthPage;
