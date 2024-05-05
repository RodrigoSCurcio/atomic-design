// Components
import { SLoginForm } from "./style";
import Button from "components/atoms/Button";
// Styles
import Input from "components/atoms/Input";

export default function LoginForm() {
  return (
    <SLoginForm>
      <Input label="E-mail" required type="email" />
      <Input label="Password" required type="password" /> 
      <Button>Login</Button>
    </SLoginForm>
  );
}
