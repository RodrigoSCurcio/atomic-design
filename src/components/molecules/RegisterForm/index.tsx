//Components
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
// Styles
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
