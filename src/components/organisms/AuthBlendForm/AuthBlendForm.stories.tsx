import { ReactNode, useState } from "react";
import AuthBlendForm from ".";
import AuthContext from "context";

export default {
  title: "organisms/AuthBlendForm",
  component: AuthBlendForm,
};

const MockContextProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(true);

  const mockContextValue = {
    login,
    setLogin,
  };

  return (
    <AuthContext.Provider value={mockContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const Default = () => (
  <MockContextProvider>
    <AuthBlendForm />
  </MockContextProvider>
);
