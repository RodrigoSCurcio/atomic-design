import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { SLoginForm } from "./style";

export default function LoginForm() {
  return (
    <SLoginForm>
      <Input label="E-mail" required type="email" />
      <Input label="Password" required type="password" /> 
      <Button>Login</Button>
    </SLoginForm>
  );
}
