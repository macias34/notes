"use client";

import FormStep from "@/components/Form/MultiStepForm/FormStep";
import useMultiStepForm from "@/components/Form/MultiStepForm/useMultiStepForm";
import Button from "@/components/UI/Button/Button";
const NewNotePage = () => {
  const steps = [
    <FormStep id={1} />,
    <FormStep id={2} />,
    <FormStep id={3} />,
    <FormStep id={4} />,
  ];

  const { step, next, prev, currentStep } = useMultiStepForm(steps);

  return (
    <div className="flex h-[80vh] w-full flex-col items-center gap-5">
      <div className="flex flex-col">{step}</div>
      <div className="flex gap-5">
        {currentStep >= 1 ? (
          <Button type="button" onClick={prev}>
            {"<"}
          </Button>
        ) : (
          ""
        )}
        {currentStep < steps.length - 1 ? (
          <Button type="button" onClick={next}>
            {">"}
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NewNotePage;
