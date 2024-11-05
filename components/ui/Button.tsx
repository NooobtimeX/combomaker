import React from "react";

interface ButtonProps {
  link?: string;
  text: string;
  variant?: "confirm";
}

const Button: React.FC<ButtonProps> = ({ link, text, variant = "primary" }) => {
  const baseStyles = "px-4 py-2 rounded-xl text-sm ";
  let variantStyles = "";

  switch (variant) {
    case "confirm":
      variantStyles =
        "border border-green-500 transition duration-200 hover:bg-green-500 text-green-500 hover:text-white";
      break;
    default:
      variantStyles = "bg-blue-600 hover:bg-blue-700";
      break;
  }

  const buttonContent = (
    <button className={`${baseStyles} ${variantStyles}`}>{text}</button>
  );

  return link ? <a href={link}>{buttonContent}</a> : buttonContent;
};

export default Button;
