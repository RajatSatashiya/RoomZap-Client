import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import UserContext from "../context/userContext";

function Home() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const history = useNavigate();
  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      history("/");
    } else {
      history("/login");
    }
  }, []);

  const createUser = async (email, password) => {
    try {
      const response = await fetch("/user/signin", {
        method: "POST",
        body: JSON.stringify({
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
        history("/login");
      } else {
        history("/");
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    createUser(email, password);
  };

  return (
    <>
      <div className="register-page">
        <div className="regLeft">
          <h3>Welcome User!</h3>
          <p>
            Start your room search with us, enter your details & get started.
          </p>
          <Link to="/register">
            <button>SIGN UP</button>
          </Link>
        </div>
        <div className="regRight">
          <form onSubmit={submitForm}>
            <h2 className="form-title">Sign In to RoomZap</h2>
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
            {/* <p className="forgot">Forgot Password?</p> */}
            <button type="submit" className="submit-btn">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
