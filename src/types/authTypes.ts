import { User, Session } from "@supabase/supabase-js";

export type Data = {
  data: {
    user?: User | null;
    session?: Session | null;
    errorMessage?: string;
  };
};

export interface reqBody {
  email: string;
  password: string;
}

export interface AuthSession {
  session: Session;
  user: User;
}

export interface AuthInitialValues {
  email: string;
  password: string;
}
