// React
import { useContext } from "react";
// Styles
import { SAuthBlendForm } from "./style";
// Components
import Logo from "components/atoms/Logo";
import LoginForm from "components/molecules/LoginForm";
import RegisterForm from "components/molecules/RegisterForm";
import Button from "components/atoms/Button";
// Context
import AuthContext, { IFormAuthContext } from "context";

export default function AuthBlendForm() {
  const context  = useContext(AuthContext) as IFormAuthContext;
  const { login, setLogin } = context;

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
