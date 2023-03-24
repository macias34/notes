import { useContext } from "react";
import {
  NoteFormContext,
  NoteFormContextValues,
} from "@/contexts/NoteFormContext/NoteFormContext";
import Button from "@/components/UI/Button/Button";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";

const SubmitNoteForm = () => {
  const { newNoteData, mode } = useContext(
    NoteFormContext
  ) as NoteFormContextValues;
  const { word, translation, explanation, example } = newNoteData;
  const noteValues = [word, translation, example, explanation];

  const allFilled = !noteValues.some((value) => value?.length === 0);
  return (
    <div className="flex flex-col items-center gap-10">
      {allFilled ? (
        <>
          <NotePreview
            word={word}
            translation={translation}
            example={example}
            explanation={explanation}
          />
          <Button autoFocus color="green" type="submit">
            {mode} note
          </Button>
        </>
      ) : (
        <h1 className="text-center text-3xl sm:px-10 sm:text-2xl">
          Please fill in all fields to see the preview! :)
        </h1>
      )}
    </div>
  );
};

export default SubmitNoteForm;
