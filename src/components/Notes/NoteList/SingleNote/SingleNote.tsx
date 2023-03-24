import { FC } from "react";
import Link from "next/link";

export interface SingleNoteProps {
  word: string | null;
  created_at: string | null;
  id: string | null;
  home?: boolean;
}

const SingleNote: FC<SingleNoteProps> = ({ word, home, id }) => {
  if (home)
    return (
      <div className="flex min-w-[8rem] cursor-pointer items-center justify-center gap-5 rounded-xl bg-secondary px-5 py-3 text-center text-lg font-semibold capitalize text-primary hover:scale-105 dark:bg-primary dark:text-secondary">
        {word}
      </div>
    );

  return (
    <Link className="transition hover:scale-105" href={`/profile/notes/${id}`}>
      <div className="flex min-w-[8rem] items-center justify-center gap-5 rounded-xl bg-secondary px-5 py-3 text-center text-lg font-semibold  text-primary dark:bg-primary dark:text-secondary">
        <span className="first-letter:capitalize">{word}</span>
      </div>
    </Link>
  );
};

export default SingleNote;
