import {
  Dispatch,
  InputHTMLAttributes,
  Ref,
  SetStateAction,
  useState,
} from "react";

export type InputType = "password" | "date" | "number" | undefined;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: InputType;
  placeholder: string;
  ref?: Ref<HTMLInputElement>;
  values?: any[];
  setShowInput?: Dispatch<SetStateAction<boolean>>;
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
      return "relative w-fit appearance-none rounded-lg border-2 bg-primary py-3 px-4 text-black outline-none transition placeholder:text-gray dark:bg-secondary dark:text-primary  border-red focus:border-red  dark:focus:border-red";
    } else {
      return "relative w-fit appearance-none rounded-lg border-2 bg-primary py-3 px-4 text-black outline-none transition placeholder:text-gray dark:bg-secondary dark:text-primary  border-gray focus:border-secondary dark:focus:border-primary";
    }
  };

  return {
    getInputStyles,
  };
};

export default useInput;
