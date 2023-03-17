"use client";

import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { noteFormSchema } from "@/validations/notes/NoteForm";
import { newNote } from "@/contexts/NoteFormContext/NoteFormContext";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import NoteForm from "@/components/Notes/NoteForm/NoteForm";
import { note } from "@/types/supabase";
import { sanitizeUrl } from "@/helpers/notes/notesHelpers";
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
    const { word } = values;

    const { data: notes, error } = await supabase
      .from("notes_users")
      .select(`note:notes(*)`)
      .eq("user_id", user_id);

    const isDuplicated = notes?.some(({ note }) => {
      const { word: wordToSearch } = note as note;
      if (wordToSearch === word) {
        return true;
      } else return false;
    });

    if (isDuplicated) {
      alert("Note for this word already exists!");
      return;
    }

    const { error: noteError, data } = await supabase
      .from("notes")
      .insert(values)
      .select();

    const { id: note_id } = (data as note[])[0];

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

  return <NoteForm mode="add" formikConfig={formikConfig} />;
};

export default NewNotePage;
