"use client";

import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper, {
  formikConfig,
} from "@/components/Form/FormikWrapper/FormikWrapper";
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

const NoteForm: FC<{ formikConfig: formikConfig }> = ({ formikConfig }) => {
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
