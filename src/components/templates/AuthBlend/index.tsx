// Style
import { useContext } from "react";
// Components
import Header from "components/molecules/Header";
import AuthBlendForm from "components/organisms/AuthBlendForm";
// Styles
import { SAuthBlend } from "./style";
// Context
import AuthContext, { IFormAuthContext } from "context";



export default function AuthBlend() {
  const context = useContext(AuthContext) as IFormAuthContext;
  const { setLogin } = context;

  return (
    <SAuthBlend>
      <Header setLogin={setLogin} />
      <div className="page">
        <AuthBlendForm />
      </div>
    </SAuthBlend>
  );
}
