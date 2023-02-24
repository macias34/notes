"use client";
import { formikConfig } from "@/components/FormikWrapper/FormikWrapper";
import Input from "@/components/UI/Input/Input";
import FormikWrapper from "@/components/FormikWrapper/FormikWrapper";
import Button from "@/components/UI/Button/Button";
import { signupSchema } from "@/validations/auth/Signup";
import { AuthInitialValues } from "@/types/authTypes";
import { useSupabase } from "../SupabaseProvider/SupabaseProvider";
import Link from "next/dist/client/link";
import { useDispatch } from "react-redux";
import { showNotification } from "@/features/Notification/notificationSlice";

const SignUp = () => {
  const { supabase } = useSupabase();
  const dispatch = useDispatch();

  const initialValues: AuthInitialValues = {
    email: "",
    password: "",
  };

  const handleEmailSingup = async (values: AuthInitialValues) => {
    const { email, password } = values;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (data?.user?.identities?.length === 0) {
      dispatch(
        showNotification({
          type: "error",
          message: "User with this email already exists.",
        })
      );
      return;
    } else if (error) {
      dispatch(showNotification({ type: "error", message: error.message }));
      return;
    }

    dispatch(
      showNotification({
        type: "success",
        message: "Succesfully signed up! Now please confirm your email.",
      })
    );
  };

  const signupFormConfig: formikConfig = {
    initialValues,
    onSubmit: handleEmailSingup,
    validationSchema: signupSchema,
  };
  return (
    <>
      <h1 className="text-3xl font-semibold">Sign up</h1>
      <FormikWrapper
        formikConfig={signupFormConfig}
        className="flex flex-col items-center justify-center"
      >
        <Input label="email" placeholder="10minute@mail.com" name="email" />

        <Input
          label="password"
          type="password"
          placeholder="strongPassword123"
          name="password"
        />
        <Button type="submit">Sign up</Button>
      </FormikWrapper>
      <p>
        Already a user?{" "}
        <Link className="font-semibold text-accent" href="/auth/signin">
          Sign in!
        </Link>
      </p>
    </>
  );
};

export default SignUp;
