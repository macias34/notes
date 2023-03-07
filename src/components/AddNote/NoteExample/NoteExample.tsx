"use client";

import {
  FC,
  FormEvent,
  KeyboardEvent,
  useContext,
  useRef,
  useState,
} from "react";
import Input from "@/components/UI/Input/Input";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import { useFormikContext } from "formik";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";
import { handleInput } from "@/app/helpers/notes/handlers";

const NoteExample: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const [valid, setValid] = useState<boolean>(false);

  const { errors, submitForm } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("example" in errors) && e.target.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleExampleChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.target.value;

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
    />
  );
};

export default NoteExample;
