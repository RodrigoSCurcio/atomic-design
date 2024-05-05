// Components
import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";
// Styles
import { SHeader } from "./style";

interface IAuthBlend {
  setLogin: (login: boolean) => void;
}

export default function Header({ setLogin }: IAuthBlend) {
  return (
    <SHeader>
      <Logo />
      <div>
        <Button onClick={() => setLogin(true)}>Sign in</Button>
        <Button onClick={() => setLogin(false)} outline>
          Sign up
        </Button>
      </div>
    </SHeader>
  );
}
