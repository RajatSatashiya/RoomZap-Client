import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import AuthContext from "../context/authContext";
import "./stylings/Dashboard.css";

function Dashboard() {
  const firstnameInputRef = useRef(null);
  const lastnameInputRef = useRef(null);
  const dobInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const contactInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const disabledInputRef = useRef(null);

  const authContext = useContext(AuthContext);

  const getUser = async () => {
    try {
      const response = await fetch("/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authContext.token}`,
        },
      });

      const data = await response.json();
      var { message } = data;
      firstnameInputRef.current.value = message.firstname;
      lastnameInputRef.current.value = message.lastname;
      emailInputRef.current.value = message.email;
      disabledInputRef.current.value = message.email;
      contactInputRef.current.value = message.contact;
      updateDate(message.dob);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const updateDate = (dob) => {
    var date = new Date(dob);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    dobInputRef.current.value = year + "-" + month + "-" + day;
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async (
    firstname,
    lastname,
    email,
    dob,
    contact,
    gender
  ) => {
    try {
      const response = await fetch("/user", {
        method: "PATCH",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          dob,
          contact,
          gender,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authContext.token}`,
        },
      });

      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    const firstname = firstnameInputRef.current.value;
    const lastname = lastnameInputRef.current.value;
    const email = emailInputRef.current.value;
    const dob = dobInputRef.current.value;
    const contact = contactInputRef.current.value;
    const gender = genderInputRef.current.value;

    updateUser(firstname, lastname, email, dob, contact, gender);
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashUpper">
          <div className="dashDown">
            <form className="updateField" onSubmit={submitForm}>
              <div className="dashboardHeader">
                <h4>Basic Info</h4>
                <button type="submit" className="updateBtn">
                  Update Profile
                </button>
              </div>
              <label>
                <span>Firstname</span>
                <input type="text" ref={firstnameInputRef}></input>
              </label>

              <label>
                <span>Lastname</span>
                <input type="text" ref={lastnameInputRef}></input>
              </label>

              <label>
                <span>D.O.B</span>
                <input type="date" ref={dobInputRef}></input>
              </label>

              <label>
                <span>Email</span>
                <input type="email" ref={emailInputRef}></input>
              </label>

              <label>
                <span>Contact</span>
                <input type="number" ref={contactInputRef}></input>
              </label>

              <label>
                <span>Gender</span>
                <select name="gender" ref={genderInputRef}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="DND">Can't Reveal</option>
                </select>
              </label>
            </form>

            <form className="updateField">
              <div className="dashboardHeader">
                <h4>Verify Account</h4>
                <button type="submit" className="updateBtn">
                  Send OTP
                </button>
              </div>
              <label>
                <span>Email</span>
                <input type="email" ref={disabledInputRef}></input>
              </label>

              <label>
                <span>Enter OTP</span>
                <input type="number"></input>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
