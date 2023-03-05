import Input from "@/components/UI/Input/Input";
import { FC, ReactNode } from "react";
import FormikWrapper, { formikConfig } from "../FormikWrapper/FormikWrapper";

interface Props {
  id: number;
  formikConfig: formikConfig;
  children?: ReactNode;
}

const FormStep: FC<Props> = ({ children, formikConfig }) => {
  return (
    <>
      <FormikWrapper
        formikConfig={formikConfig}
        className="flex h-full w-full flex-col items-center justify-evenly"
      >
        {children}
      </FormikWrapper>
    </>
  );
};

export default FormStep;
