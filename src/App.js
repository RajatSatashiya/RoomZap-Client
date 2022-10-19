import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Rentals from "./components/Rentals";
import Room from "./components/Room";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/createRental" element={<Room />}></Route>

          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
