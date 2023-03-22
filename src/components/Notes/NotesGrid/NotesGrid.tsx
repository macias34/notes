"use client";

import Button from "@/components/UI/Button/Button";
import { noteNoteID } from "@/types/supabase";
import Link from "next/link";
import { FC, useState } from "react";
import NotePreview from "../NotePreview/NotePreview";

interface Props {
  notes: noteNoteID[];
}

const NotesGrid: FC<Props> = ({ notes }) => {
  const [showTest, setShowTest] = useState<boolean>(false);

  const toggleTest = () => setShowTest((prevState) => !prevState);
  const transformTextToHidden = (text: string) => {
    let processed = "";

    for (let c of text) {
      if (c === " ") processed += " ";
      else processed += "?";
    }

    return processed;
  };

  return (
    <>
      <Button type="button" color="primary" onClick={toggleTest}>
        {showTest ? "Reveal" : "Test yourself!"}
      </Button>
      <div className="flex w-full flex-wrap items-start justify-center">
        {notes?.map((note) => {
          const { word, example, explanation, translation, note_id } = note;

          return (
            <Link
              className="scale-[80%]"
              href={`/profile/notes/${note_id}`}
              key={note_id}
            >
              <NotePreview
                word={word!}
                example={
                  showTest && example ? transformTextToHidden(example) : example
                }
                explanation={
                  showTest && explanation
                    ? transformTextToHidden(explanation)
                    : explanation
                }
                translation={
                  showTest && translation
                    ? transformTextToHidden(translation)
                    : translation
                }
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NotesGrid;
