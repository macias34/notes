"use client";

import { Formik, Form } from "formik";
import { ReactNode } from "react";
import { FC, FormEvent } from "react";

export interface formikConfig {
  initialValues: object;
  onSubmit: (values: any) => void;
  validationSchema: object;
}

interface Props {
  children: ReactNode;
  formikConfig: formikConfig;
  className: string;
}

const FormikWrapper: FC<Props> = ({ children, formikConfig, className }) => {
  const { initialValues, onSubmit, validationSchema }: formikConfig =
    formikConfig;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className={className}>{children}</Form>
    </Formik>
  );
};

export default FormikWrapper;
