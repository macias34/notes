import { FC } from "react";
import { SingleNote } from "@/types/supabase";
import IconButton from "@/components/UI/IconButton/IconButton";
import { AiOutlineEdit, AiFillEdit } from "react-icons/ai";

const SingleNote: FC<SingleNote> = ({ id, word, created_at }) => {
  return (
    <div className="flex w-full items-center justify-center gap-5 rounded-xl px-5 py-2 dark:bg-primary">
      <span className="text-lg font-semibold capitalize dark:text-secondary">
        {word}
      </span>
    </div>
  );
};

export default SingleNote;
