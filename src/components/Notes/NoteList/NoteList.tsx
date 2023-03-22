import { groupByNote } from "@/supabase/supabase-types";
import { FC } from "react";
import SingleNote from "@/components/UI/Profile/Notes/SingleNote/SingleNote";

interface Props {
  notes: groupByNote[];
}

const NoteList: FC<Props> = ({ notes }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {notes.map(({ note }) => {
        const { word, created_at, id } = note;

        return (
          <SingleNote key={id} id={id} word={word} created_at={created_at} />
        );
      })}
    </div>
  );
};

export default NoteList;
