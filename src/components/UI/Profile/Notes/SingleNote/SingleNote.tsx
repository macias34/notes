import { FC } from "react";
import { SingleNote } from "@/types/supabase";
import Link from "next/link";

const SingleNote: FC<SingleNote> = ({ id, word, created_at }) => {
  return (
    <Link href={`/profile/notes/${id}`}>
      <div className="flex w-full items-center justify-center gap-5 rounded-xl px-5 py-4 dark:bg-primary">
        <span className="text-lg font-semibold capitalize dark:text-secondary">
          {word}
        </span>
      </div>
    </Link>
  );
};

export default SingleNote;
