import "server-only";

import Navbar from "@/components/UI/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col justify-start">
      <Navbar />
    </div>
  );
}
