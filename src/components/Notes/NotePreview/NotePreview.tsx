"use client";

import { FC } from "react";
import type { Note } from "@/supabase/supabase-types";
export type NotePreviewProps = Omit<Note, "id" | "created_at">;

const NotePreview: FC<NotePreviewProps> = ({
  word,
  translation,
  explanation,
  example,
}) => {
  return (
    <div
      className={`flex min-w-[25rem] max-w-xl flex-col items-center justify-center gap-7 rounded-lg border-2 border-secondary px-10 py-10 text-xl dark:border-primary lg:min-w-[20rem] lg:max-w-lg sm:min-w-[20rem] sm:max-w-xs sm:px-5`}
    >
      <h1 className="text-3xl font-bold text-accent">{word}</h1>
      <span>means</span>
      <h2 className="text-2xl font-bold dark:text-primary ">{translation}</h2>
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="italic">{explanation}</span>
        <span className="font-bold italic">{example}</span>
      </div>
    </div>
  );
};

export default NotePreview;
