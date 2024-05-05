// React
import { InputHTMLAttributes } from "react";
// Style
import { SInput } from "./style";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
export default function Input({ label, ...rest }: IInput) {
  return (
    <SInput>
      <label>{label}</label>
      <input {...rest} />
    </SInput>
  );
}
