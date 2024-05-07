// React
import { InputHTMLAttributes } from "react";
// Style
import { SInput } from "./style";

export default function Input({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <SInput  {...rest} />
  );
}
