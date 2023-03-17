import { InputHTMLAttributes, Ref, useState } from "react";
import { InputStyles } from "@/styles/reusableStyles";

export type InputType = "password" | "date" | "number" | undefined;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: InputType;
  placeholder: string;
  ref?: Ref<HTMLInputElement>;
  values?: any[];
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

  return {
    getInputStyles,
  };
};

export default useInput;
