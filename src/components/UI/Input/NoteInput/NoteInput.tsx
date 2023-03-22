"use client";

import { FC, memo, Ref } from "react";
import useInput, { InputType } from "../useInput";
import ValidationError from "@/components/Form/ValidationError/ValidationError";
import { useFormikContext, Field } from "formik";
import { useState, useEffect } from "react";
import { newNote } from "@/contexts/NoteFormContext/NoteFormContext";
import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: "word" | "translation" | "explanation" | "example";
  type?: InputType;
  placeholder: string;
  ref?: Ref<HTMLInputElement>;
}

const NoteInput: FC<InputProps> = ({
  label,
  placeholder,
  name,
  onKeyDown,
  className,
  onInput,
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const { getInputStyles } = useInput();
  const { errors, touched } = useFormikContext<any>();

  useEffect(() => {
    if (name in errors && touched[name]) setIsError(true);
    else setIsError(false);
  }, [errors, touched]);

  return (
    <>
      <div
        className={`relative flex flex-col items-center gap-5 ${
          isError ? "mb-4" : "mb-8"
        }`}
      >
        <label
          className="mb-5 text-3xl font-semibold capitalize tracking-wide text-secondary dark:text-primary"
          htmlFor={name}
        >
          {label}
        </label>
        <Field
          placeholder={placeholder}
          name={name}
          type="text"
          autoFocus
          onInput={onInput}
          onKeyDown={onKeyDown}
          spellCheck="false"
          className={`${getInputStyles(isError)} ${className}`}
        />

        {isError ? <ValidationError name={name} /> : ""}
      </div>
    </>
  );
};

export default memo(NoteInput);
