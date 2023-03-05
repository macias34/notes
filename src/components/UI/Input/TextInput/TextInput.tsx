import { Field } from "formik";
import useInput, { RenderInput } from "../useInput";
import { FC } from "react";

const TextInput: FC<RenderInput> = ({
  placeholder,
  name,
  type,
  isError,
  onKeyDown,
}) => {
  const { getInputStyles } = useInput();

  return (
    <Field
      placeholder={placeholder}
      name={name}
      type={type}
      onKeyDown={onKeyDown}
      spellCheck="false"
      className={getInputStyles(isError)}
    />
  );
};

export default TextInput;
