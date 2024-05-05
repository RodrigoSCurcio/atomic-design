// React
import { ButtonHTMLAttributes } from "react";
// Style
import { SButton } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
}
export default function Button({ outline, children, ...rest }: ButtonProps) {
  return (
    <SButton {...rest} outline={outline}>
      {children}
    </SButton>
  );
}
