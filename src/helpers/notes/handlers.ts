import {
  dispatch,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import { KeyboardEvent } from "react";

export const handleInput = (
  e: KeyboardEvent<HTMLInputElement>,
  setNewNoteData: dispatch,
  key: string
) => {
  const value = e.target.value;

  setNewNoteData((prevState) => {
    return {
      ...prevState,
      key: value,
    };
  });
};
