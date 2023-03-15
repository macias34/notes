import { FC } from "react";
import { SingleNoteProps } from "@/types/supabase";
import Link from "next/link";

const SingleNote: FC<SingleNoteProps> = ({ word, home }) => {
  if (home)
    return (
      <div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-5 rounded-xl bg-secondary px-5 py-3 text-center text-lg font-semibold capitalize text-primary dark:bg-primary dark:text-secondary">
        {word}
      </div>
    );

  return (
    <Link href={`/profile/notes/${word}`}>
      <div className="flex min-w-[8rem] items-center justify-center gap-5 rounded-xl bg-secondary px-5 py-3 text-center text-lg font-semibold capitalize text-primary dark:bg-primary dark:text-secondary">
        {word}
      </div>
    </Link>
  );
};

export default SingleNote;
