import { FC, ReactNode } from "react";

interface Props {
  id: number;
  children?: ReactNode;
}

const FormStep: FC<Props> = ({ id, children }) => {
  return <>Step {id}</>;
};

export default FormStep;
