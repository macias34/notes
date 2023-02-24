import { useState } from "react";

const useFormikWrapper = () => {
  const [formikErrors, setFormikErrors] = useState<object>({});

  return { formikErrors, setFormikErrors };
};

export default useFormikWrapper;
