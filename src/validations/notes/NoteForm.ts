import { object, string } from "yup";
import { requiredMessage } from "../messages";

export const noteFormSchema = object({
  word: string().trim().required(requiredMessage("word")),
  translation: string().trim().required(requiredMessage("translation")),
  explanation: string().trim().required(requiredMessage("explanation")),
  example: string().trim().required(requiredMessage("example")),
});
