"use client";
import { authSchema } from "@/validations/auth";
import { AuthError, SupabaseClient } from "@supabase/supabase-js";
import { FC, useState } from "react";
import FormikWrapper, {
  formikConfig,
} from "../Form/FormikWrapper/FormikWrapper";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

interface InitialValues {
  email: string;
  password: string;
}

interface SignUpResponse {
  status: number;
  message: string;
}

const Auth: FC<{ supabase: SupabaseClient }> = ({ supabase }) => {

  const [response, setResponse] = useState<SignUpResponse | AuthError | null>(
    null
  );
  const [authMode, setAuthMode] = useState<"signIn" | "signUp">("signIn");

  const formikConfig: formikConfig = {
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values: InitialValues) => {
      setResponse(null);
      if (authMode === "signIn") {
        const { error } = await supabase.auth.signInWithPassword(values);
        if (error) setResponse(error);
      } else if (authMode === "signUp") {
        const { error } = await supabase.auth.signUp(values);
        if (error) setResponse(error);

        setResponse({
          status: 200,
          message: "Succesfully signed up. Please confirm your email.",
        });
      }
    },
    validationSchema: authSchema,
  };

  const modeLabel = authMode === "signIn" ? "Sign in" : "Sign up";
  const switchModeLabel =
    authMode === "signIn" ? "No account? Sign up" : "Already a user? Sign in";

  const toggleAuthMode = () => {
    setAuthMode((prevState) => (prevState === "signIn" ? "signUp" : "signIn"));
    setResponse(null);
  };

  return (
    <>
      <FormikWrapper
        formikConfig={formikConfig}
        className="flex flex-col items-center gap-10"
      >
        <h1 className="text-3xl font-semibold">{modeLabel}</h1>
        <Input
          autoFocus
          name="email"
          label="email"
          placeholder="10minute@mail.com"
        />
        <Input
          name="password"
          type="password"
          label="password"
          placeholder="secretpassword"
        />
        <Button type="submit" color="green">
          {modeLabel}
        </Button>
      </FormikWrapper>
      <div className="flex flex-col items-center gap-2">
        {response ? (
          <p
            className={`text-sm font-semibold ${
              response.status === 200
                ? "text-secondary dark:text-primary"
                : "text-red"
            }`}
          >
            {response.message}
          </p>
        ) : (
          ""
        )}
        <p
          onClick={toggleAuthMode}
          className="cursor-pointer text-sm text-gray hover:text-secondary dark:hover:text-primary"
        >
          {switchModeLabel}
        </p>
      </div>
    </>
  );
};

export default Auth;
