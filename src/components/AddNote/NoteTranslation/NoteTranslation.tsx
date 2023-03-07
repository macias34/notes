"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";

const NoteTranslation: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("translation" in errors) && e.target.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleTranslationChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setNewNoteData((prevState) => {
      return {
        ...prevState,
        translation: value,
      };
    });
  };

  return (
    <NoteInput
      label="translation"
      onKeyDown={handleEnterSubmit}
      onInput={(e) => handleTranslationChange(e)}
      placeholder="bogactwo"
      name="translation"
    />
  );
};

export default NoteTranslation;
