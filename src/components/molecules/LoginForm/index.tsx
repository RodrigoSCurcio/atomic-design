// Components
import { SLoginForm } from "./style";
import Button from "components/atoms/Button";
import Label from "components/atoms/Label";
// Styles
import Input from "components/atoms/Input";

export default function LoginForm() {
  return (
    <SLoginForm>
      <Label text="E-mail" />
      <Input required type="email" />

      <Label text="Password" />
      <Input required type="password" />
      
      <Button>Login</Button>
    </SLoginForm>
  );
}
