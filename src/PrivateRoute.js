import React, { useContext } from "react";
import AuthContext from "./context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const auth = authContext.isLoggedIn;
  console.log(auth);
  return auth ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
