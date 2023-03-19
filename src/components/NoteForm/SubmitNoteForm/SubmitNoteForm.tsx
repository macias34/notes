import { useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import Button from "@/components/UI/Button/Button";
import { useFormikContext } from "formik";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";

const SubmitNoteForm = () => {
  const { newNoteData, mode } = useContext(NewNoteContext) as NewNoteFunctions;
  const { word, translation, explanation, example } = newNoteData;
  const noteValues = [word, translation, example, explanation];
  const { errors } = useFormikContext();
  const errorMessages: string[] = Object.values(errors);

  const allFilled = !noteValues.some((value) => value?.length === 0);
  return (
    <>
      {allFilled ? (
        <>
          <NotePreview
            word={word}
            translation={translation}
            example={example}
            explanation={explanation}
          />
          <Button color="green" type="submit">
            {mode} note
          </Button>
        </>
      ) : (
        <h1 className="text-3xl">
          Please fill in all fields to see the preview! :)
        </h1>
      )}
    </>
  );
};

export default SubmitNoteForm;
