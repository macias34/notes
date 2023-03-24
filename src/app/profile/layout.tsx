"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const queryClient = new QueryClient({});

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <motion.div
          key={pathname}
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
        >
          {children}
        </motion.div>
      </QueryClientProvider>
    </>
  );
}
