"use client";

import { motion } from "framer-motion";
import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import FormikWrapper, {
  formikConfig,
} from "@/components/Form/FormikWrapper/FormikWrapper";
import Steps from "@/components/Form/Steps/Steps";
import { FC, useState } from "react";
import {
  NoteFormContext,
  NoteFormValues,
} from "@/contexts/NoteFormContext/NoteFormContext";
import NoteExample from "@/components/Notes/NoteForm/NoteExample/NoteExample";
import NoteExplanation from "@/components/Notes/NoteForm/NoteExplanation/NoteExplanation";
import SubmitNoteForm from "@/components/Notes/NoteForm/SubmitNoteForm/SubmitNoteForm";
import NoteTranslation from "@/components/Notes/NoteForm/NoteTranslation/NoteTranslation";
import NoteWord from "@/components/Notes/NoteForm/NoteWord/NoteWord";
import NoteDictionary from "../NoteDictionary/NoteDictionary";

interface Props {
  formikConfig: formikConfig;
  mode: "add" | "edit";
}

const NoteForm: FC<Props> = ({ formikConfig, mode }) => {
  const steps = [
    <NoteWord key={"word"} />,
    <NoteDictionary key={"dictionary"} />,
    <NoteTranslation key={"translation"} />,
    <NoteExplanation key={"explanation"} />,
    <NoteExample key={"example"} />,
    <SubmitNoteForm key={"submitForm"} />,
  ];

  const initialValues = formikConfig.initialValues as NoteFormValues;

  const { step, next, currentStep, goTo } = useMultiStepForm(steps);
  const [newNoteData, setNewNoteData] = useState<NoteFormValues>(initialValues);

  return (
    <NoteFormContext.Provider
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
      <div className="flex h-full w-full flex-col items-center justify-evenly gap-5 ">
        <FormikWrapper
          formikConfig={formikConfig}
          className="flex h-4/5 w-full flex-col items-center justify-between sm:gap-20 sm:py-10"
        >
          <h1 className="text-[2rem]">
            <span className="capitalize">{mode}</span>{" "}
            <span className="font-bold text-accent">{newNoteData.word}</span>{" "}
            note
          </h1>
          <motion.div
            key={currentStep}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
              },
            }}
          >
            {step}
          </motion.div>
          <Steps />
        </FormikWrapper>
      </div>
    </NoteFormContext.Provider>
  );
};

export default NoteForm;
