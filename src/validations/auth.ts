import { object, string } from "yup";

export const authSchema = object({
  email: string(),
  password: string(),
});
