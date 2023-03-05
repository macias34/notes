"use client";

import NoteTitle from "@/components/AddNote/NoteTitle/NoteTitle";
import FormStep from "@/components/Form/MultiStepForm/FormStep";
import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper from "@/components/Form/FormikWrapper/FormikWrapper";
import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { addNoteSchema } from "@/validations/notes/AddNote";
import Steps from "@/components/Form/Steps/Steps";
import { useState } from "react";
import { NewNoteContext } from "@/contexts/newNoteContext/newNoteContext";

const NewNotePage = () => {
  const steps = [<NoteTitle />, <div>2</div>];
  const { step, next, prev, currentStep, goTo } = useMultiStepForm(steps);
  const [newNoteData, setNewNoteData] = useState<object>({});

  return (
    <NewNoteContext.Provider value={{ next }}>
      <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-5">
        <Steps steps={steps} currentStep={currentStep} goTo={goTo} />
        {step}
      </div>
    </NewNoteContext.Provider>
  );
};

export default NewNotePage;
