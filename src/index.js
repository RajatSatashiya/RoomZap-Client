import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { UserContextProvider } from "./context/userContext";

ReactDOM.render(
  <AuthContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
