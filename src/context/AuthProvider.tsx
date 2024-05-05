// React
import { ReactNode, useState } from "react";
// Context
import AuthContext from "context";

interface IAuthProvider {
  children: ReactNode;
}

export default function AuthProvider({ children }: IAuthProvider) {
  const [login, setLogin] = useState(true);

  return (
    <AuthContext.Provider value={{login, setLogin}}>
      {children}
    </AuthContext.Provider>
  );
}
