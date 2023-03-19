"use client";

import { ReactNode } from "react";
import Navbar from "@/components/UI/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({});

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <div className="h-[85vh]">{children}</div>
      </QueryClientProvider>
    </>
  );
}
