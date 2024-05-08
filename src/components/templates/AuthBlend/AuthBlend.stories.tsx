import AuthBlend from ".";
import { ReactNode, useState } from "react";
import AuthContext from "context";

export default {
  title: "templates/AuthBlend",
  component: AuthBlend,
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
    <AuthBlend />
  </MockContextProvider>
);
