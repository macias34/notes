import { object, string } from "yup";
import { requiredMessage, invalidEmailMessage} from "../messages";

export const loginSchema = object({
  email : string().email(invalidEmailMessage()).required(requiredMessage("email")),
  password: string().required(requiredMessage("password")),
});
