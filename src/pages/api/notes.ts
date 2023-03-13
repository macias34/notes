import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/db/db";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}