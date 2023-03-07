import { useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/newNoteContext/newNoteContext";
import Button from "@/components/UI/Button/Button";
import { useFormikContext } from "formik";

const SubmitAddNote = () => {
  const { newNoteData } = useContext(NewNoteContext) as NewNoteFunctions;
  const { word, translation, explanation, example } = newNoteData;
  const { errors } = useFormikContext();

  const errorMessages: string[] = Object.values(errors);
  return (
    <>
      <h1 className="text-3xl font-bold">Note preview</h1>
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-accent px-20 py-10 text-xl">
        <h1 className="text-3xl font-bold text-accent">
          {word} <span className="dark:text-primary"> - {translation}</span>
        </h1>
        <h2 className="italic">{explanation}</h2>
        <h2 className="font-bold italic">{example}</h2>
      </div>

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
