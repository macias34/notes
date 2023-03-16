import { createContext, Dispatch, SetStateAction, ReactElement } from "react";

export const NewNoteSteps = ["word", "translation", "explanation", "example"];
export interface newNote {
  word: string | null;
  translation: string | null;
  explanation: string | null;
  example: string | null;
}

export interface NewNoteFunctions {
  next: () => void;
  steps: ReactElement[];
  newNoteData: newNote;
  currentStep: number;
  goTo: (index: number) => void;
  setNewNoteData: Dispatch<SetStateAction<newNote>>;
  mode: "add" | "edit";
}

export type dispatch = Dispatch<SetStateAction<newNote>>;
export const NewNoteContext = createContext({});
