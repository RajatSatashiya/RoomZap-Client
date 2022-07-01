import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import "./stylings/Room.css";

function Room() {
  const aptTypeInputRef = useRef(null);
  const descInputRef = useRef(null);
  const roomTypeInputRef = useRef(null);
  const vacancyInputRef = useRef(null);
  const rentInputRef = useRef(null);
  const aptNumberInputRef = useRef(null);
  const streetInputRef = useRef(null);
  const cityInputRef = useRef(null);
  const stateInputRef = useRef(null);
  const pincodeInputRef = useRef(null);
  const countryInputRef = useRef(null);

  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const createRoom = async (
    apartmentType,
    description,
    roomType,
    vacancy,
    rent,
    apartmentNumber,
    street,
    city,
    state,
    postcode,
    country
  ) => {
    try {
      const response = await fetch("/rentals", {
        method: "POST",
        body: JSON.stringify({
          apartmentType,
          description,
          roomType,
          vacancy,
          rent,
          apartmentNumber,
          street,
          city,
          state,
          postcode,
          country,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authContext.token}`,
        },
      });
      const data = await response.json();
      var { status } = data;
      if (status == "success") {
        history("/");
      }

      console.log(data);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    var aptType = aptTypeInputRef.current.value;
    var desc = descInputRef.current.value;
    var roomType = roomTypeInputRef.current.value;
    var vacancy = vacancyInputRef.current.value;
    var rent = rentInputRef.current.value;
    var aptNumber = aptNumberInputRef.current.value;
    var street = streetInputRef.current.value;
    var city = cityInputRef.current.value;
    var state = stateInputRef.current.value;
    var pincode = pincodeInputRef.current.value;
    var country = countryInputRef.current.value;

    createRoom(
      aptType,
      desc,
      roomType,
      vacancy,
      rent,
      aptNumber,
      street,
      city,
      state,
      pincode,
      country
    );
  };
  return (
    <>
      <form onSubmit={submitForm} className="rentaroom">
        <div className="innerclass">
          <div className="roomLeft">
            <label htmlFor="aptType">Apartment Type</label>
            <select name="aptType" required ref={aptTypeInputRef}>
              <option value="Flat">Flat</option>
              <option value="Bungalow">Bungalow</option>
            </select>

            <label htmlFor="desc">Description</label>
            <textarea name="desc" required ref={descInputRef}></textarea>

            <label htmlFor="roomType">Room Type</label>
            <select name="roomType" required ref={roomTypeInputRef}>
              <option value="Entire Apartment">Entire Apartment</option>
              <option value="Private Room">Private Room</option>
              <option value="1-Room">1-Room</option>
              <option value="2-Room">2-Room</option>
              <option value="3+ Rooms">3+ Rooms</option>
            </select>

            <label htmlFor="vacancy">Vacancy</label>
            <input
              type="number"
              name="vacancy"
              required
              ref={vacancyInputRef}
            ></input>

            <label htmlFor="rent">Rent</label>
            <input
              type="number"
              name="rent"
              required
              ref={rentInputRef}
            ></input>
          </div>

          <div className="roomRight">
            <label htmlFor="aptNumber">Apartment Number</label>
            <input
              type="text"
              name="aptNumber"
              required
              ref={aptNumberInputRef}
            ></input>

            <label htmlFor="Street">Street</label>
            <input
              type="text"
              name="address"
              required
              ref={streetInputRef}
            ></input>

            <label htmlFor="City">City</label>
            <input type="text" name="City" required ref={cityInputRef}></input>

            <label htmlFor="State">State</label>
            <input
              type="text"
              name="State"
              required
              ref={stateInputRef}
            ></input>

            <label htmlFor="Pincode">Pincode</label>
            <input
              type="text"
              name="Pincode"
              required
              ref={pincodeInputRef}
            ></input>

            <label htmlFor="Country">Country</label>
            <input
              type="text"
              name="Country"
              required
              ref={countryInputRef}
            ></input>
          </div>
        </div>
        <div className="submitBtn">
          <button type="submit" className="roomSubmit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Room;
