"use client";

import {
  FC,
  FormEvent,
  KeyboardEvent,
  useContext,
  useRef,
  useState,
} from "react";
import NoteInput from "@/components/UI/Input/NoteInput/NoteInput";
import {
  dispatch,
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import { useFormikContext } from "formik";
import { handleInput } from "@/app/helpers/notes/handlers";

const NoteExplanation: FC = () => {
  const { next, setNewNoteData, newNoteData } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const [valid, setValid] = useState<boolean>(false);

  const { errors } = useFormikContext();

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const valid = !("explanation" in errors) && e.target.value.length > 0;

    if (e.key === "Enter") {
      e.preventDefault();
      if (valid) {
        next();
      }
    }
  };
  const handleExplanationChange = (e: FormEvent<HTMLInputElement>) => {
    const value = e.target.value;

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
    />
  );
};

export default NoteExplanation;
