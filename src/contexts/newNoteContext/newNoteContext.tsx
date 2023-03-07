import { createContext, Dispatch, SetStateAction, ReactElement } from "react";

export const NewNoteSteps = ["word", "translation", "explanation", "example"];
export interface newNote {
  word: string;
  translation: string;
  explanation: string;
  example: string;
}

export interface NewNoteFunctions {
  next: () => void;
  steps: ReactElement[];
  newNoteData: newNote;
  currentStep: number;
  goTo: (index: number) => void;
  setNewNoteData: Dispatch<SetStateAction<newNote>>;
}

export type dispatch = Dispatch<SetStateAction<newNote>>;
export const NewNoteContext = createContext({});
