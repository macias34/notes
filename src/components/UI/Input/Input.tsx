"use client";

import { FC, memo } from "react";
import useInput from "./useInput";
import { InputProps } from "./useInput";
import { Field } from "formik";

const Input: FC<InputProps> = ({
  label,
  placeholder,
  name,
  type,
  onKeyDown,
  className,
  autoFocus,
}) => {
  const { getInputStyles } = useInput();

  return (
    <>
      <div className={`items-left relative flex flex-col gap-3`}>
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
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          spellCheck="false"
          className={`${getInputStyles(false)} ${className}`}
        />
      </div>
    </>
  );
};

export default memo(Input);
