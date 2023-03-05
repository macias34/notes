"use client";

import { FC, KeyboardEvent, useContext, useRef, useState } from "react";
import Input from "@/components/UI/Input/Input";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import { useFormikContext } from "formik";

const NoteExample: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const [valid, setValid] = useState<boolean>(false);

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("example" in errors) && e.target.value.length > 0;

    if (e.key === "Enter") {
      if (valid) {
        next();
      }
    }
  };

  return (
    <Input
      label="Note example"
      onKeyDown={handleEnterSubmit}
      placeholder="Enter note example"
      name="example"
    />
  );
};

export default NoteExample;
