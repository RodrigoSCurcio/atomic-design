import Header from "../../molecules/Header";
import AuthBlendForm from "../../organisms/AuthBlendForm";
import { SAuthBlend } from "./style";

export default function AuthBlend() {
  return (
    <SAuthBlend>
      <Header />
      <div className="page">
        <AuthBlendForm />
      </div>
    </SAuthBlend>
  );
}
