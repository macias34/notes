"use client";

import { ReactElement, useState } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const next = () =>
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });

  const prev = () => {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const goTo = (index: number) => {
    setCurrentStep(index);
  };

  return {
    currentStep,
    prev,
    next,
    goTo,
    step: steps[currentStep],
  };
};

export default useMultiStepForm;
