import React, { useState } from "react";

const AuthContext = React.createContext({
  id: "",
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialID = localStorage.getItem("userID");

  const [token, setToken] = useState(initialToken);
  const [id, setId] = useState(initialID);

  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    setId(null);
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
  };
  const loginHandler = (token, userID) => {
    setToken(token);
    setId(userID);
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
  };
  const contextValue = {
    id,
    token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <>
      <AuthContext.Provider value={contextValue}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
