import { object, string } from "yup";
import {
  requiredMessage,
  invalidEmailMessage,
  tooShortMessage,
} from "../messages";

export const addNoteSchema = object({
  noteTitle: string().required(requiredMessage("note title")),
  noteExplanation: string().required(requiredMessage("note explanation")),
  noteExample: string().required(requiredMessage("note example")),
});

export const noteTitleSchema = object({
  noteTitle: string().required(requiredMessage("note title")),
});
