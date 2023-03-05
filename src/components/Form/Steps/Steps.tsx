import { FC, Fragment, ReactElement } from "react";

interface StepsProps {
  steps: ReactElement[];
  currentStep: number;
  goTo: (index: number) => void;
}

const Steps: FC<StepsProps> = ({ steps, currentStep, goTo }) => {
  const switchStep = (index: number) => {};

  return (
    <div className="flex items-center">
      {steps.map((step, index) => {
        const pointIndex = index + 1;
        return (
          <Fragment key={index}>
            <div
              onClick={() => switchStep(index)}
              className="prevent-select flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 text-xl transition dark:border-primary dark:hover:bg-primary dark:hover:text-secondary"
            >
              {pointIndex}
            </div>
            {index < steps.length - 1 ? (
              <div className="h-[1px] w-24 bg-primary"></div>
            ) : (
              ""
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Steps;
