"use client";

import Input from "@/components/UI/Input/Input";
import FormikWrapper from "@/components/FormikWrapper/FormikWrapper";
import Button from "@/components/UI/Button/Button";
import { formikConfig } from "@/components/FormikWrapper/FormikWrapper";
import { useSupabase } from "@/components/SupabaseProvider/SupabaseProvider";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { showNotification } from "@/features/Notification/notificationSlice";
import { resetPasswordSchema } from "@/validations/auth/Login";

interface ResetPasswordInitialValues {
  email: string;
}

const ResetPassword = () => {
  const { supabase } = useSupabase();
  const dispatch = useDispatch();

  const initialValues: ResetPasswordInitialValues = {
    email: "",
  };

  const handlePasswordReset = async (values: ResetPasswordInitialValues) => {
    const { email } = values;

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      dispatch(showNotification({ type: "error", message: error.message }));
      return;
    }

    dispatch(
      showNotification({
        type: "success",
        message: "Check your email to reset your password!",
      })
    );
  };

  const loginFormConfig: formikConfig = {
    initialValues,
    onSubmit: handlePasswordReset,
    validationSchema: resetPasswordSchema,
  };

  return (
    <>
      <h1 className="text-3xl font-semibold">Reset password</h1>
      <FormikWrapper
        formikConfig={loginFormConfig}
        className="flex flex-col items-center justify-center"
      >
        <Input label="email" placeholder="10minute@mail.com" name="email" />

        <Button type="submit">Reset password</Button>
      </FormikWrapper>
      <p>
        Already resetted ?{" "}
        <Link className="font-semibold text-accent" href="/auth/signin">
          Sign in!
        </Link>
      </p>
    </>
  );
};

export default ResetPassword;
