import { createContext, Dispatch, SetStateAction, ReactElement } from "react";

export interface NoteFormValues {
  word: string | null;
  translation: string | null;
  explanation: string | null;
  example: string | null;
}

export interface NoteFormContextValues {
  next: () => void;
  steps: ReactElement[];
  newNoteData: NoteFormValues;
  currentStep: number;
  goTo: (index: number) => void; // eslint-disable-line unused-imports/no-unused-vars
  setNewNoteData: Dispatch<SetStateAction<NoteFormValues>>;
  mode: "add" | "edit";
}

export type dispatch = Dispatch<SetStateAction<NoteFormValues>>;
export const NoteFormContext = createContext<NoteFormContextValues | null>(
  null
);
