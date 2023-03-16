import { object, string } from "yup";
import { requiredMessage } from "../messages";

export const noteFormSchema = object({
  word: string().required(requiredMessage("word")),
  translation: string().required(requiredMessage("translation")),
  explanation: string().required(requiredMessage("explanation")),
  example: string().required(requiredMessage("example")),
});
