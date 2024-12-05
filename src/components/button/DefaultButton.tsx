import React from "react";
import { DButton } from "./style";

interface ButtonProps {
  children?: React.ReactNode;
  [key: string]: any;
}

const DefaultButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <DButton type="submit" {...rest}>
      {children}
    </DButton>
  );
};

export default DefaultButton;