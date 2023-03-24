"use client";

import { FC, FormEvent, KeyboardEvent, useContext } from "react";
import {
  NoteFormContext,
  NoteFormContextValues,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";

const NoteExample: FC = () => {
  const { next, setNewNoteData } = useContext(
    NoteFormContext
  ) as NoteFormContextValues;

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("example" in errors) && e.currentTarget.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleExampleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    setNewNoteData((prevState) => {
      return {
        ...prevState,
        example: value,
      };
    });
  };

  return (
    <NoteInput
      label="Note example"
      onKeyDown={handleEnterSubmit}
      onInput={(e) => handleExampleChange(e)}
      placeholder="I always loved chitabot"
      name="example"
      className="w-[30rem]"
    />
  );
};

export default NoteExample;
