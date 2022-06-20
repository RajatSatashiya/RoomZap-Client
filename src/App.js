import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />}></Route>

          {/* <Route path="/login"> */}
          {/* {authContext.isLoggedIn && <Navigate to="/" />} */}
          {/* {!authContext.isLoggedIn && <Login />} */}
          {/* </Route> */}
          <Route path="/login" element={<Login />}></Route>

          {/* <Route path="/login" element={<PrivateRoute />}> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* </Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
