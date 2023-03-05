"use client";

import { FC, useContext } from "react";
import Input from "@/components/UI/Input/Input";
import FormikWrapper, {
  formikConfig,
} from "@/components/Form/FormikWrapper/FormikWrapper";
import { noteTitleSchema } from "@/validations/notes/AddNote";
import { NewNoteContext } from "@/contexts/newNoteContext/newNoteContext";

import { NewNoteFunctions } from "@/contexts/newNoteContext/newNoteContext";

const NoteTitle: FC = () => {
  const { next } = useContext(NewNoteContext) as NewNoteFunctions;

  const initialValues = {
    noteTitle: "",
  };

  const formikConfig: formikConfig = {
    initialValues,
    onSubmit: (values) => {
      console.log("submit");
      next();
    },
    validationSchema: noteTitleSchema,
  };

  return (
    <FormikWrapper formikConfig={formikConfig}>
      <Input
        label="Note title"
        placeholder="Enter note title"
        name="noteTitle"
      />
    </FormikWrapper>
  );
};

export default NoteTitle;
