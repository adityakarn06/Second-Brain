import { ReactElement } from "react";

type Variants = "primary" | "secondary";
interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
}

const variantStyles: { [key in Variants]: string } = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeStyles: { [key in ButtonProps["size"]]: string } = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};

const defaultStyles = "rounded-md font-light flex items-center";

export const Button = ({variant, text, startIcon, endIcon, size}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles} ${
        sizeStyles[size]
      }`}
    >
      <div className="pr-2">
        {startIcon}
      </div>
      {text}
      {endIcon}
    </button>
  );
};

<Button variant="primary" size="md" onClick={() => {}} text={"asd"} />;
