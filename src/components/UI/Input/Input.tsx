"use client";

import { FC, memo } from "react";
import useInput from "./useInput";
import { InputProps } from "./useInput";
import ValidationError from "../../Form/ValidationError/ValidationError";
import { useFormikContext, Field, FormikTouched } from "formik";
import { useState, useEffect } from "react";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  name,
  type,
  onKeyDown,
  className,
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const { getInputStyles } = useInput();
  const { errors, touched } = useFormikContext<any>();

  useEffect(() => {
    if (name in errors && touched[name]) setIsError(true);
    else setIsError(false);
  }, [errors, touched, name]);

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
        <Field
          placeholder={placeholder}
          name={name}
          type={type}
          onKeyDown={onKeyDown}
          spellCheck="false"
          className={`${getInputStyles(isError)} ${className}`}
        />
      </div>
      {isError ? <ValidationError name={name} /> : ""}
    </>
  );
};

export default memo(Input);
