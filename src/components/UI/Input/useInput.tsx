import { InputHTMLAttributes, useState } from "react";
import { Field } from "formik";
import { InputStyles } from "@/styles/reusableStyles";
import TextInput from "./TextInput/TextInput";
import PasswordInput from "./PasswordInput/PasswordInput";

type InputType = "password" | "date" | "number" | undefined;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: InputType;
  placeholder: string;
}

export interface RenderInput extends Partial<InputProps> {
  name: string;
  type?: InputType;
  placeholder: string;
  isError: boolean;
}

const useInput = () => {
  const getInputStyles = (isError: boolean): string => {
    if (isError) {
      return InputStyles + "border-red focus:border-red  dark:focus:border-red";
    } else {
      return (
        InputStyles +
        "border-gray focus:border-secondary dark:focus:border-primary"
      );
    }
  };

  const renderInput = ({ type, placeholder, name, isError }: RenderInput) => {
    switch (type) {
      case "password": {
        return (
          <PasswordInput
            placeholder={placeholder}
            name={name}
            type={type}
            isError={isError}
          />
        );
      }

      default:
        return (
          <TextInput
            placeholder={placeholder}
            name={name}
            type={type}
            isError={isError}
          />
        );
    }
  };

  return {
    renderInput,
    getInputStyles,
  };
};

export default useInput;
