//Components
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Label from "components/atoms/Label";
// Styles
import { SRegisterForm } from "./style";

export default function RegisterForm() {
  return (
    <SRegisterForm>
      <Label text="E-mail" />
      <Input type="email" />

      <Label text="Password" />
      <Input type="password" />

      <Label text="Password" />
      <Input type="password" />
      
      <Button type="button">Register</Button>
    </SRegisterForm>
  );
}
