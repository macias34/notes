import { groupByNote } from "@/types/supabase";
import { FC } from "react";
import SingleNote from "@/components/UI/Profile/Notes/SingleNote/SingleNote";

interface Props {
  notes: groupByNote[];
}

const NoteList: FC<Props> = ({ notes }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {notes.map(({ note }) => {
        const { word, created_at, id, url } = note;

        return (
          <SingleNote key={id} id={id} word={word} created_at={created_at} />
        );
      })}
    </div>
  );
};

export default NoteList;
