"use client";

import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { addNoteSchema } from "@/validations/notes/AddNote";
import { newNote } from "@/contexts/newNoteContext/newNoteContext";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/Notes/NoteForm/NoteForm";
import { note } from "@/types/supabase";

const EditNote = async ({ data }: { data: note }) => {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const { word, translation, explanation, example } = data;

  const initialValues: newNote = {
    word,
    translation,
    explanation,
    example,
  };

  const formikConfig: formikConfig = {
    initialValues,
    onSubmit: async (values) => {
      const { data: noteData, error: noteError } = await supabase
        .from("notes")
        .insert(values)
        .select("id");
      if (noteError) {
        console.log(noteError);
        return;
      }

      const note_id = noteData[0].id;
      const { error } = await supabase
        .from("notes_users")
        .insert({ note_id, user_id: session?.user.id });

      if (error) {
        console.log(error);
        return;
      }
      router.push("/profile/notes");
    },

    validationSchema: addNoteSchema,
  };

  return <NoteForm formikConfig={formikConfig} />;
};

export default EditNote;
