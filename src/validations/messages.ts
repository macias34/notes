type Message = (label?: string) => string; // eslint-disable-line unused-imports/no-unused-vars

export const tooShortMessage: Message = (label) => {
  return `Too short ${label}, please type some more 😌..`;
};

export const tooLongMessage: Message = (label) => {
  return `Too long ${label}, please type less 😌..`;
};

export const requiredMessage: Message = (label) => {
  return `Please fill in the ${label} 😓..`;
};

export const invalidEmailMessage: Message = () => {
  return "The email you passed in is invalid 😭..";
};

export const notMatchingPasswordsMessage: Message = () => {
  return "Passwords don't match 😵..";
};

export const unknownError: Message = (label) => {
  return `Unknown ${label} error occured 😐..`;
};

export const apiErrorMessage: Message = (label) => {
  return `${label} 😐..`;
};
