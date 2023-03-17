"use client";

import { FC } from "react";
import { NoteProps } from "../Note/Note";

export type NotePreviewProps = Omit<NoteProps, "id">;

const NotePreview: FC<NotePreviewProps> = ({
  word,
  translation,
  explanation,
  example,
}) => {
  return (
    <div className="flex max-w-xl flex-col items-center justify-center gap-5 rounded-lg border-2 border-accent px-10 py-10 text-xl">
      <h1 className="text-center text-3xl font-bold text-accent">
        {word}{" "}
        <span className="text-center dark:text-primary"> - {translation}</span>
      </h1>
      <h2 className="italic">{explanation}</h2>
      <h2 className="text-center font-bold italic">{example}</h2>
    </div>
  );
};

export default NotePreview;
