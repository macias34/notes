import { FC } from "react";
import { addNote } from "@/types/supabase";

const Note: FC<addNote> = ({ word, translation, explanation, example }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-accent px-20 py-10 text-xl">
      <h1 className="text-3xl font-bold text-accent">
        {word} <span className="dark:text-primary"> - {translation}</span>
      </h1>
      <h2 className="italic">{explanation}</h2>
      <h2 className="font-bold italic">{example}</h2>
    </div>
  );
};

export default Note;
