import React, { useContext } from "react";
import AuthContext from "./context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const auth = authContext.isLoggedIn;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
