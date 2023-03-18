"use client";

import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper, {
  formikConfig,
} from "@/components/Form/FormikWrapper/FormikWrapper";
import Steps from "@/components/Form/Steps/Steps";
import { FC, useEffect, useState } from "react";
import {
  NewNoteContext,
  newNote,
} from "@/contexts/NoteFormContext/NoteFormContext";
import NoteExample from "@/components/NoteForm/NoteExample/NoteExample";
import NoteExplanation from "@/components/NoteForm/NoteExplanation/NoteExplanation";
import SubmitNoteForm from "@/components/NoteForm/SubmitNoteForm/SubmitNoteForm";
import NoteTranslation from "@/components/NoteForm/NoteTranslation/NoteTranslation";
import NoteWord from "@/components/NoteForm/NoteWord/NoteWord";
import NoteDictionary from "../NoteDictionary/NoteDictionary";

interface Props {
  formikConfig: formikConfig;
  mode: "add" | "edit";
}

const NoteForm: FC<Props> = ({ formikConfig, mode }) => {
  const steps = [
    <NoteWord />,
    <NoteDictionary />,
    <NoteTranslation />,
    <NoteExplanation />,
    <NoteExample />,
    <SubmitNoteForm />,
  ];

  const initialValues = formikConfig.initialValues as newNote;

  const { step, next, currentStep, goTo } = useMultiStepForm(steps);
  const [newNoteData, setNewNoteData] = useState<newNote>(
    initialValues as newNote
  );

  return (
    <NewNoteContext.Provider
      value={{
        next,
        newNoteData,
        setNewNoteData,
        currentStep,
        goTo,
        steps,
        mode,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-evenly gap-5">
        <FormikWrapper
          formikConfig={formikConfig}
          className="flex h-4/5 w-full flex-col items-center justify-between"
        >
          <h1 className="text-[2rem]">
            <span className="capitalize">{mode}</span>{" "}
            <span className="font-bold capitalize">{newNoteData.word}</span>{" "}
            note
          </h1>
          {step}
          <Steps />
        </FormikWrapper>
      </div>
    </NewNoteContext.Provider>
  );
};

export default NoteForm;
