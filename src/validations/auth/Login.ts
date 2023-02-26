import { object, string } from "yup";
import { requiredMessage, invalidEmailMessage, tooShortMessage } from "../messages";

export const loginSchema = object({
  email: string()
    .email(invalidEmailMessage())
    .required(requiredMessage("email")),
  password: string().required(requiredMessage("password")),
});

export const resetPasswordSchema = object({
  email: string()
    .email(invalidEmailMessage())
    .required(requiredMessage("email")),
});

export const newPasswordSchema = object({
  password : string().min(6, tooShortMessage("password")).required(requiredMessage("password"))
})