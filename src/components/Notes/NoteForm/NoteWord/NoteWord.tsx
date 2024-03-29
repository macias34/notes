"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import {
  NoteFormContext,
  NoteFormContextValues,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";

const NoteWord: FC = () => {
  const { next, setNewNoteData } = useContext(
    NoteFormContext
  ) as NoteFormContextValues;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("word" in errors) && e.currentTarget.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleWordChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
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
      onInput={(e) => handleWordChange(e)}
      placeholder="ChitaBot"
      name="word"
    />
  );
};

export default NoteWord;
