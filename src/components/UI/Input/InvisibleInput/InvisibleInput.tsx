"use client";

import { FC, memo, useRef } from "react";
import { InputProps } from "../useInput";
import ValidationError from "@/components/Form/ValidationError/ValidationError";
import { useFormikContext, Field } from "formik";
import { useState, useEffect } from "react";

const InvisibleInput: FC<InputProps> = ({
  label,
  placeholder,
  name,
  type,
  onKeyDown,
  className,
  onBlur,
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const { errors, touched } = useFormikContext<any>();
  const ref = useRef(null);

  useEffect(() => {
    if (name in errors && touched[name]) setIsError(true);
    else setIsError(false);
  }, [errors, touched, name]);

  return (
    <>
      <div
        className={`items-left relative flex flex-col ${isError ? "mb-4" : ""}`}
      >
        <label
          className="text-xs font-semibold uppercase tracking-wide text-secondary dark:text-primary"
          htmlFor={name}
        >
          {label}
        </label>
        <Field
          innerRef={ref}
          placeholder={placeholder}
          name={name}
          type={type}
          onKeyDown={onKeyDown}
          spellCheck="false"
          autoFocus
          onBlur={onBlur}
          className={`bg-transparent text-center font-bold text-yellow  focus:outline-none ${className}`}
        />
      </div>
      {isError ? <ValidationError name={name} /> : ""}
    </>
  );
};

export default memo(InvisibleInput);
