import { ErrorMessage } from "formik";
import { FC } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";

interface Props {
  name: string;
}

const ValidationError: FC<Props> = ({ name }) => {
  return (
    <>
      {<ErrorMessage name={name} /> ? (
        <p className={`text-sm text-red transition `}>
          <BsFillExclamationCircleFill className="mr-2 inline" />
          <ErrorMessage name={name} />
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default ValidationError;
