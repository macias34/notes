import { object, string } from "yup";
import { requiredMessage, tooLongMessage, tooShortMessage } from "./messages";

export const usernameSchema = object({
  username: string()
    .trim()
    .min(4, tooShortMessage("username"))
    .max(15, tooLongMessage("username"))
    .required(requiredMessage("username")),
});
