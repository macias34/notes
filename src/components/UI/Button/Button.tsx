import { FC } from "react";
import { HTMLProps } from "react";

export type ButtonColor = "red" | "yellow" | "green" | "primary";

interface Props {
  type: "submit" | "button";
  color: ButtonColor;
}

const Button: FC<Props & HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  onClick,
  type,
  color,
}) => {
  const getButtonColor = (color: ButtonColor) => {
    switch (color) {
      case "green":
        return "btn__green";

      case "red":
        return "btn__red";

      case "yellow":
        return "btn__yellow";
      case "primary":
        return "btn__primary";
      default:
        break;
    }
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn ${getButtonColor(color)} ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
