"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";

const NoteExplanation: FC = () => {
  const { next, setNewNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid =
      !("explanation" in errors) && e.currentTarget.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleExplanationChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setNewNoteData((prevState) => {
      return {
        ...prevState,
        explanation: value,
      };
    });
  };

  return (
    <NoteInput
      label="explanation"
      onKeyDown={handleEnterSubmit}
      onInput={(e) => handleExplanationChange(e)}
      placeholder="Synonym to wealth"
      name="explanation"
      className="w-[30rem]"
    />
  );
};

export default NoteExplanation;
