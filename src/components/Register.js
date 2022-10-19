import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import UserContext from "../context/userContext";
import "./stylings/Register.css";

function Home() {
  const firstnameInputRef = useRef(null);
  const lastnameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const history = useNavigate();
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      history("/");
    } else {
      history("/register");
    }
  }, []);

  const createUser = async (firstname, lastname, email, password) => {
    try {
      const response = await fetch("/user/signup", {
        method: "POST",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      authContext.login(data.message.token, data.message._id);
      userContext.writeEmail(email);

      const tokenValue = localStorage.getItem("token");
      if (tokenValue === "undefined") {
        history("/signup");
      } else {
        history("/");
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const firstname = firstnameInputRef.current.value;
    const lastname = lastnameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    createUser(firstname, lastname, email, password);
  };

  return (
    <>
      <div className="register-page">
        <div className="regLeft">
          <h3>Welcome User!</h3>
          <p>
            To Stay connected with us, please login with your personal info.
          </p>
          <Link to="/login">
            <button>SIGN IN</button>
          </Link>
        </div>
        <div className="regRight">
          <form onSubmit={submitForm}>
            <h2 className="form-title">Create Account</h2>
            <input
              type="text"
              placeholder="firstname"
              required
              ref={firstnameInputRef}
            ></input>
            <input
              type="text"
              placeholder="lastname"
              required
              ref={lastnameInputRef}
            ></input>
            <input
              type="email"
              placeholder="Email"
              ref={emailInputRef}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              ref={passwordInputRef}
              required
            ></input>
            <button type="submit" className="submit-btn">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
