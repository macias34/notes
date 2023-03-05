import { createContext, Dispatch, SetStateAction, ReactElement } from "react";

export const NewNoteSteps = ["title", "description", "example"];
export interface newNote {
  title: string;
  description: string;
  example: string;
  isValid: boolean;
}

export interface NewNoteFunctions {
  next: () => void;
  steps: ReactElement[];
  newNoteData: newNote;
  currentStep: number;
  goTo: (index: number) => void;
  setNewNoteData: Dispatch<SetStateAction<newNote>>;
}
export const NewNoteContext = createContext({});
