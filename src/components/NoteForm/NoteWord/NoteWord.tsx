"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";

const NoteWord: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("word" in errors) && e.target.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleTitleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setNewNoteData((prevState) => {
      return {
        ...prevState,
        word: value,
      };
    });
  };

  return (
    <NoteInput
      label="word"
      onKeyDown={handleEnterSubmit}
      onInput={(e) => handleTitleChange(e)}
      placeholder="ChitaBot"
      name="word"
    />
  );
};

export default NoteWord;
