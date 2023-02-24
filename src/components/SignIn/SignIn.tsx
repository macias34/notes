"use client";

import Input from "@/components/UI/Input/Input";
import FormikWrapper from "@/components/FormikWrapper/FormikWrapper";
import Button from "@/components/UI/Button/Button";
import { formikConfig } from "@/components/FormikWrapper/FormikWrapper";
import { loginSchema } from "@/validations/auth/Login";
import { AuthInitialValues } from "@/types/authTypes";
import { useSupabase } from "@/components/SupabaseProvider/SupabaseProvider";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { showNotification } from "@/features/Notification/notificationSlice";

const SignIn = () => {
  const { supabase } = useSupabase();
  const dispatch = useDispatch();

  const initialValues: AuthInitialValues = {
    email: "",
    password: "",
  };

  const handleEmailLogin = async (values: AuthInitialValues) => {
    const { email, password } = values;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      dispatch(showNotification({ type: "error", message: error.message }));
      return;
    }

    dispatch(
      showNotification({ type: "success", message: "Succesfully signed in!" })
    );
  };

  const loginFormConfig: formikConfig = {
    initialValues,
    onSubmit: handleEmailLogin,
    validationSchema: loginSchema,
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Sign in</h1>
      <FormikWrapper
        formikConfig={loginFormConfig}
        className="flex flex-col items-center justify-center"
      >
        <Input label="email" placeholder="funnyusernamexdd" name="email" />
        <Input
          label="password"
          type="password"
          placeholder="strongPassword123"
          name="password"
        />
        <Button type="submit">Sign in</Button>
      </FormikWrapper>
      <p>
        Need an account ?{" "}
        <Link className="font-semibold text-accent" href="/auth/signup">
          Sign up!
        </Link>
      </p>
    </>
  );
};

export default SignIn;
