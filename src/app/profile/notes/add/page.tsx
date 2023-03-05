"use client";

import NoteTitle from "@/components/AddNote/NoteTitle/NoteTitle";
import FormStep from "@/components/Form/MultiStepForm/FormStep";
import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper from "@/components/Form/FormikWrapper/FormikWrapper";
import { formikConfig } from "@/components/Form/FormikWrapper/FormikWrapper";
import { addNoteSchema } from "@/validations/notes/AddNote";
import Steps from "@/components/Form/Steps/Steps";
import { useState } from "react";
import {
  NewNoteContext,
  newNote,
} from "@/contexts/newNoteContext/newNoteContext";
import NoteExample from "@/components/AddNote/NoteExample/NoteExample";
import NoteDescription from "@/components/AddNote/NoteDescription/NoteDescription";

const NewNotePage = () => {
  const steps = [<NoteTitle />, <NoteDescription />, <NoteExample />];
  const { step, next, prev, currentStep, goTo } = useMultiStepForm(steps);
  const [newNoteData, setNewNoteData] = useState<newNote>({
    title: "",
    description: "",
    example: "",
    isValid: false,
  });

  const initialValues: Omit<newNote, "isValid"> = {
    title: "",
    description: "",
    example: "",
  };

  const formikConfig: formikConfig = {
    initialValues,
    onSubmit: (values) => {
      setNewNoteData((prevState) => {
        return {
          ...prevState,
          ...values,
        };
      });
      next();
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
      <div className="flex h-[80vh] w-full flex-col items-center justify-evenly gap-5">
        <FormikWrapper
          formikConfig={formikConfig}
          className="flex h-full w-full flex-col items-center justify-evenly gap-5"
        >
          <Steps />
          {step}
        </FormikWrapper>
      </div>
    </NewNoteContext.Provider>
  );
};

export default NewNotePage;
