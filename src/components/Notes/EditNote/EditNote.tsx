"use client";

import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { noteFormSchema } from "@/validations/notes";
import { NoteFormValues } from "@/contexts/NoteFormContext/NoteFormContext";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import NoteForm from "../NoteForm/NoteForm/NoteForm";
import { Note } from "@/supabase/supabase-types";

const EditNote = ({ data }: { data: Note }) => {
  const { supabase } = useSupabase();
  const router = useRouter();

  const { word, translation, explanation, example, id } = data;

  const initialValues: NoteFormValues = {
    word,
    translation,
    explanation,
    example,
  };

  const formikConfig: formikConfig = {
    initialValues,
    onSubmit: async (values: NoteFormValues) => {
      const { error: noteError } = await supabase
        .from("notes")
        .update(values)
        .eq("id", id);

      if (noteError) {
        console.log(noteError);
        return <p className="text-3xl font-bold">{noteError.message}</p>;
      }

      router.replace("/profile/notes");
      router.refresh();
    },

    validationSchema: noteFormSchema,
  };
  return <NoteForm mode="edit" formikConfig={formikConfig} />;
};

export default EditNote;
