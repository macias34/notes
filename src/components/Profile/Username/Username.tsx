"use client";

import FormikWrapper, {
  formikConfig,
} from "@/components/Form/FormikWrapper/FormikWrapper";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { usernameSchema } from "@/validations/profile";
import { FC, useState } from "react";
import InvisibleInput from "@/components/UI/Input/InvisibleInput/InvisibleInput";

interface Props {
  username: string;
  id: string;
}

const Username: FC<Props> = ({ username, id }) => {
  const [currentUsername, setCurrentUsername] = useState<string>(username);
  const [showInput, setShowInput] = useState<boolean>(false);
  const { supabase } = useSupabase();

  const formikConfig: formikConfig = {
    initialValues: {
      username:
        currentUsername === "Click here to enter username :)"
          ? ""
          : currentUsername,
    },
    onSubmit: async (values: { username: string }) => {
      const { username } = values;
      const { error } = await supabase
        .from("users")
        .update({ username })
        .eq("id", id);

      if (error) {
        alert("User with this username already exists!");
        return;
      }
      setCurrentUsername(username);
      setShowInput(false);
    },
    validationSchema: usernameSchema,
  };

  if (showInput)
    return (
      <FormikWrapper
        className="flex w-full flex-col items-center justify-center"
        formikConfig={formikConfig}
      >
        <div className="h-full w-full">
          <InvisibleInput
            label=""
            placeholder="funnyusernamexdd"
            name="username"
            className="text-xl font-bold"
            onBlur={() => setShowInput(false)}
          />
        </div>
      </FormikWrapper>
    );
  return (
    <span
      onClick={() => setShowInput(true)}
      className="cursor-pointer text-xl font-bold"
      title="Click to change username"
    >
      {currentUsername}
    </span>
  );
};

export default Username;
