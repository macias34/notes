import { Field } from "formik";
import useInput, { RenderInput } from "../useInput";
import { InputStyles } from "@/styles/reusableStyles";
import { FC, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput: FC<RenderInput> = ({
  placeholder,
  name,
  type,
  isError,
}) => {
  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
  const toggleVisibility = () => {
    setVisiblePassword((prevState: boolean) => !prevState);
  };
  const { preventDefaultEnter, getInputStyles } = useInput();

  return (
    <div className="relative">
      <Field
        placeholder={placeholder}
        name={name}
        type={visiblePassword ? "text" : "password"}
        onKeyDown={preventDefaultEnter}
        spellCheck="false"
        className={getInputStyles(isError)}
      />
      <div
        className={`absolute top-1/2 right-4 h-fit w-fit -translate-y-1/2 cursor-pointer bg-primary pl-2 text-2xl dark:bg-secondary dark:text-primary`}
      >
        {visiblePassword ? (
          <AiOutlineEyeInvisible
            className={`text-2xl text-gray`}
            onClick={() => toggleVisibility()}
          />
        ) : (
          <AiOutlineEye
            className={`text-2xl text-secondary dark:text-primary`}
            onClick={() => toggleVisibility()}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
