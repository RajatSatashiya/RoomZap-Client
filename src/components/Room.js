import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import Aptdetails from "./multiform/Aptdetails";
import Aptaddress from "./multiform/Aptaddress";
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

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    apartmentType: "",
    description: "",
    roomType: "",
    vacancy: "",
    rent: "",
    apartmentNumber: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const createRoom = async () => {
    try {
      const response = await fetch("/rentals", {
        method: "POST",
        body: JSON.stringify(formData),
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

  const jetha = (arr) => {
    console.log(arr);
  };
  const PageDisplay = () => {
    if (page == 0) {
      return <Aptdetails formData={formData} setFormData={setFormData} />;
    } else {
      return <Aptaddress formData={formData} setFormData={setFormData} />;
    }
  };
  const submitForm = () => {
    createRoom();
  };
  return (
    <>
      <div className="page-heading">
        Rent your Room
        <hr></hr>
      </div>
      <div className="rentaroom">
        {PageDisplay()}
        <div className="nav-btns">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage(0);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === 1) {
                submitForm();
              } else {
                setPage(1);
              }
            }}
          >
            {page === 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Room;
