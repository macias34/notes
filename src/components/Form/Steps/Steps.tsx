import { FC, Fragment, useContext } from "react";
import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";

const Steps: FC = () => {
  const { steps, goTo, currentStep } = useContext(
    NewNoteContext
  ) as NewNoteFunctions;

  const switchStep = (index: number) => {
    goTo(index);
  };

  return (
    <div className="flex items-center py-10">
      {steps.map((step, index) => {
        const pointIndex = index + 1;
        return (
          <Fragment key={index}>
            <div
              onClick={() => switchStep(index)}
              className={`prevent-select flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 text-xl transition hover:border-secondary hover:bg-secondary hover:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-secondary
              ${
                index === currentStep
                  ? "border-secondary bg-secondary text-primary dark:border-primary dark:bg-primary dark:text-secondary"
                  : ""
              }
              `}
            >
              {pointIndex}
            </div>
            {index < steps.length - 1 ? (
              <div className="h-[1px] w-24 bg-secondary dark:bg-primary"></div>
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
