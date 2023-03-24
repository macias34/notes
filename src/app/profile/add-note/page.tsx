"use client";

import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { noteFormSchema } from "@/validations/notes";
import { NoteFormValues } from "@/contexts/NoteFormContext/NoteFormContext";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/Notes/NoteForm/NoteForm/NoteForm";
import { useState } from "react";

const NewNotePage = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { supabase, session } = useSupabase();
  const user_id = session?.user.id;
  const router = useRouter();

  const initialValues: NoteFormValues = {
    word: "",
    translation: "",
    explanation: "",
    example: "",
  };

  const onSubmit = async (values: NoteFormValues) => {
    if (submitted) return;
    setSubmitted(true);
    const { error: noteError, data: noteData } = await supabase
      .from("notes")
      .insert(values)
      .select()
      .single();

    if (noteError) {
      setSubmitted(false);
      console.log(noteError);
      return <p className="text-3xl font-bold">{noteError.message}</p>;
    }

    const { id: note_id } = noteData;

    const { error: noteUserError } = await supabase
      .from("notes_users")
      .insert({ user_id, note_id });

    if (noteUserError) {
      setSubmitted(false);
      console.log(noteUserError);
      return <p className="text-3xl font-bold">{noteUserError.message}</p>;
    }
    router.replace("/profile/notes");
    router.refresh();
  };

  const formikConfig: formikConfig = {
    initialValues,
    onSubmit,
    validationSchema: noteFormSchema,
  };

  return (
    <div className="h-[90vh]">
      <NoteForm mode="add" formikConfig={formikConfig} />;
    </div>
  );
};

export default NewNotePage;
