import { useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import Button from "@/components/UI/Button/Button";
import { useFormikContext } from "formik";
import Note from "@/components/Notes/Note/Note";

const SubmitAddNote = () => {
  const { newNoteData } = useContext(NewNoteContext) as NewNoteFunctions;
  const { word, translation, explanation, example } = newNoteData;
  const { errors } = useFormikContext();

  const errorMessages: string[] = Object.values(errors);
  return (
    <>
      <h1 className="text-3xl font-bold">Note preview</h1>
      <Note
        word={word}
        translation={translation}
        example={example}
        explanation={explanation}
      />
      <Button type="submit">Add note</Button>

      {errorMessages ? (
        <div className="flex flex-col items-center gap-2">
          {errorMessages.map((errorMessage, index) => (
            <p key={index} className="text-xl font-semibold text-red">
              {errorMessage}
            </p>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubmitAddNote;
