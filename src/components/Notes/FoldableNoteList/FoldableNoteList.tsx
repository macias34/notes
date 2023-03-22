"use client";
import { groupByNote } from "@/supabase/supabase-types";
import { FC, useState } from "react";
import NoteList from "../NoteList/NoteList";
interface Props {
  notesByDate: groupByNote[];
}

const FoldableNoteList: FC<Props> = ({ notesByDate }) => {
  const [unfolded, setUnfolded] = useState<boolean>(false);
  const toggleFold = () => setUnfolded((prevState) => !prevState);

  return (
    <>
      <span
        title={unfolded ? "Hide notes" : "Show notes"}
        onClick={toggleFold}
        className={`${
          notesByDate.length >= 10 ? "text-accent" : ""
        } mb-4 cursor-pointer text-xl font-semibold`}
      >
        {notesByDate.length} / 10
      </span>

      {unfolded ? <NoteList notes={notesByDate} /> : ""}
    </>
  );
};

export default FoldableNoteList;
