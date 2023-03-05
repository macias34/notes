import { createContext } from "react";

export interface NewNoteFunctions {
  next: () => void;
}

export const NewNoteContext = createContext({});
