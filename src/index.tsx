import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthBlendPage from "./components/pages/AuthBlendPage";
import AuthProvider from "context/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthBlendPage />
    </AuthProvider>
  </React.StrictMode>
);
