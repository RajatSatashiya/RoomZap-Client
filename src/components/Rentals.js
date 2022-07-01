import React from "react";
import { useState, useEffect, useContext } from "react";
import RentalCard from "./RentalCard";
import AuthContext from "../context/authContext";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  const getRentals = async () => {
    try {
      const response = await fetch("/rentals", {
        method: "GET",
      });
      const data = await response.json();
      const { message } = data;
      setRentals(message);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const authContext = useContext(AuthContext);
  const loadRentals = () => {
    if (rentals != null) {
      return rentals
        .filter((rental) => rental.owner != authContext.id)
        .map((rental, index) => (
          <RentalCard key={index} _id={rental["_id"]} rental={rental} />
        ));
    }
  };

  useEffect(() => {
    getRentals();
  }, []);
  return (
    <>
      <div className="rentalCards">{loadRentals()}</div>
    </>
  );
}

export default Rentals;
