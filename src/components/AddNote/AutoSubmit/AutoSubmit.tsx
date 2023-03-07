import { newNote } from "@/contexts/newNoteContext/newNoteContext";
import { FC, useEffect } from "react";

const AutoSubmit: FC<{ dataToSubmit: {}; submitForm: () => void }> = ({
  dataToSubmit,
  submitForm,
}) => {
  useEffect(() => {
    submitForm();
  }, [dataToSubmit]);
  return <></>;
};

export default AutoSubmit;
