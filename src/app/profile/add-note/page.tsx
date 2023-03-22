"use client";

import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { noteFormSchema } from "@/validations/notes/NoteForm";
import { newNote } from "@/contexts/NoteFormContext/NoteFormContext";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/Notes/NoteForm/NoteForm";
import { note } from "@/types/supabase";
import dayjs from "dayjs";

const NewNotePage = () => {
  const { supabase, session } = useSupabase();
  const user_id = session?.user.id;
  const router = useRouter();

  const initialValues: newNote = {
    word: "",
    translation: "",
    explanation: "",
    example: "",
  };

  const onSubmit = async (values: newNote) => {
    const { error: noteError, data } = await supabase
      .from("notes")
      .insert(values)
      .select();

    const { id: note_id, created_at } = (data as note[])[0];

    const { error: noteUserError } = await supabase
      .from("notes_users")
      .insert({ user_id, note_id });

    if (noteError || noteUserError) {
      console.log(noteError || noteUserError);
      return (
        <p className="text-3xl font-bold">
          {noteError?.message || noteUserError?.message}
        </p>
      );
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
