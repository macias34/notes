import { NoteNoteID } from "@/supabase/supabase-types";
import { FC } from "react";
import SingleNote from "./SingleNote/SingleNote";

interface Props {
  notes: NoteNoteID[];
}

const NoteList: FC<Props> = ({ notes }) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {notes.map(({ word, created_at, note_id }) => {
        return (
          <SingleNote
            key={note_id}
            id={note_id}
            word={word}
            created_at={created_at}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
