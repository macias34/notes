"use client";

import { FC, FormEvent, KeyboardEvent, useContext, useEffect } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";
import { useQuery } from "react-query";
import NoteDictionary, {
  Word,
} from "@/components/Notes/NoteDictionary/NoteDictionary";

const NoteWord: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

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
