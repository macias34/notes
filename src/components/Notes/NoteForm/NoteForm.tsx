"use client";

import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper from "@/components/Form/FormikWrapper/FormikWrapper";
import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { addNoteSchema } from "@/validations/notes/AddNote";
import Steps from "@/components/Form/Steps/Steps";
import { FC, useState } from "react";
import {
  NewNoteContext,
  newNote,
} from "@/contexts/newNoteContext/newNoteContext";
import NoteExample from "@/components/AddNote/NoteExample/NoteExample";
import NoteExplanation from "@/components/AddNote/NoteExplanation/NoteExplanation";
import SubmitAddNote from "@/components/AddNote/SubmitAddNote/SubmitAddNote";
import NoteTranslation from "@/components/AddNote/NoteTranslation/NoteTranslation";
import NoteWord from "@/components/AddNote/NoteWord/NoteWord";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";

const NoteForm: FC<{ initialValues: {} }> = ({ initialValues }) => {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const steps = [
    <NoteWord />,
    <NoteTranslation />,
    <NoteExplanation />,
    <NoteExample />,
    <SubmitAddNote />,
  ];
  const { step, next, currentStep, goTo } = useMultiStepForm(steps);
  const [newNoteData, setNewNoteData] = useState<newNote>({
    word: "",
    translation: "",
    explanation: "",
    example: "",
  });

  const initialValues: newNote = {
    word: "",
    translation: "",
    explanation: "",
    example: "",
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

  return (
    <NewNoteContext.Provider
      value={{
        next,
        newNoteData,
        setNewNoteData,
        currentStep,
        goTo,
        steps,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-evenly gap-5">
        <FormikWrapper
          formikConfig={formikConfig}
          className="flex h-full w-full flex-col items-center justify-center gap-10"
        >
          {step}
          <Steps />
        </FormikWrapper>
      </div>
    </NewNoteContext.Provider>
  );
};

export default NoteForm;
