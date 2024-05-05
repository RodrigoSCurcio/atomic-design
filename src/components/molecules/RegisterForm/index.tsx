import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { SRegisterForm } from "./style";

export default function RegisterForm() {
  return (
    <SRegisterForm>
      <Input label="E-mail" />
      <Input label="Password" /> 
      <Input label="Password" /> 
      <Button>Register</Button>
    </SRegisterForm>
  );
}