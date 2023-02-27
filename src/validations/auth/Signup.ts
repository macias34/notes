import { object, string, ref } from "yup";
import {
  invalidEmailMessage,
  notMatchingPasswordsMessage,
  requiredMessage,
  tooShortMessage,
} from "../messages";

export const signupSchema = object({
  email: string()
    .email(invalidEmailMessage())
    .required(requiredMessage("email")),
  password: string()
    .min(6, tooShortMessage("password"))
    .required(requiredMessage("password")),
});
