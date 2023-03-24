"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import {
  NoteFormContext,
  NoteFormContextValues,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";

const NoteTranslation: FC = () => {
  const { next, setNewNoteData } = useContext(
    NoteFormContext
  ) as NoteFormContextValues;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid =
      !("translation" in errors) && e.currentTarget.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleTranslationChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

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
