import { ReactNode, useState } from "react";
import AuthBlendPage from ".";
import AuthContext from "context";

export default {
  title: "pages/AuthBlendPage",
  component: AuthBlendPage,
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
      <AuthBlendPage />
    </MockContextProvider>
  );
