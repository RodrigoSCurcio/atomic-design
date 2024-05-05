import { createContext } from "react";

export interface IFormAuthContext {
  login: boolean;
  setLogin: (login: boolean) => void;
}

const AuthContext = createContext<IFormAuthContext | null>(null);

export default AuthContext;
