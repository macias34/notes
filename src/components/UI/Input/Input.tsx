"use client";

import { FC } from "react";
import useInput from "./useInput";
import { InputProps } from "./useInput";
import ValidationError from "../../Form/ValidationError/ValidationError";
import { useFormikContext } from "formik";
import { useState, useEffect } from "react";

const Input: FC<InputProps> = ({ label, placeholder, name, type }) => {
  const [isError, setIsError] = useState<boolean>(false);
  const { renderInput } = useInput();
  const { errors, touched } = useFormikContext();

  useEffect(() => {
    if (name in errors && touched[name]) setIsError(true);
    else setIsError(false);
  }, [errors, touched]);

  return (
    <>
      <div
        className={`items-left relative flex flex-col gap-3 ${
          isError ? "mb-4" : "mb-8"
        }`}
      >
        <label
          className="text-xs font-semibold uppercase tracking-wide text-secondary dark:text-primary"
          htmlFor={name}
        >
          {label}
        </label>
        {renderInput({ type, placeholder, name, isError })}
      </div>
      {isError ? <ValidationError name={name} /> : ""}
    </>
  );
};

export default Input;
