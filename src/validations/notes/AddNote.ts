import { object, string } from "yup";
import { requiredMessage } from "../messages";

export const addNoteSchema = object({
  title: string().required(requiredMessage("note title")),
  description: string().required(requiredMessage("note explanation")),
  example: string().required(requiredMessage("note example")),
});

export const noteTitleSchema = object({
  title: string().required(requiredMessage("note title")),
});
