import Button from "components/atoms/Button";
import Logo from "components/atoms/Logo";
import { SHeader } from "./style";

export default function Header() {
  return (
    <SHeader>
      <Logo />
      <div>
        <Button>Sign in</Button>
        <Button outline>Sign up</Button>
      </div>
    </SHeader>
  );
}
