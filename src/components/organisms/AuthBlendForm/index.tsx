import { useState } from "react";
import Button from "../../atoms/Button";
import LoginForm from "../../molecules/LoginForm";
import RegisterForm from "../../molecules/RegisterForm";
import { SAuthBlendForm } from "./style";
import Logo from "components/atoms/Logo";

export default function AuthBlendForm() {
  const [login, setLogin] = useState(true);
  return (
    <SAuthBlendForm>
      <Logo width={120} height={110} />

      {login && <LoginForm />}
      {!login && <RegisterForm />}

      <div className="changeForm">
        <Button type="button" onClick={() => setLogin(true)}>
          Sign in
        </Button>
        <Button type="button" onClick={() => setLogin(false)} outline>
          Sign up
        </Button>
      </div>
    </SAuthBlendForm>
  );
}
