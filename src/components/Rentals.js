import React from "react";
import { useState, useEffect } from "react";
import RentalCard from "./RentalCard";

function Rentals() {
  const [rentals, setRentals] = useState([]);

  const createUser = async () => {
    try {
      const response = await fetch("/rentals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      const { message } = data;

      setRentals(message);
    } catch (e) {
      console.log("Error: " + e);
    }
  };

  const loadRentals = () => {
    if (rentals != null) {
      return rentals.map((rental, index) => (
        <RentalCard key={index} _id={rental["_id"]} rental={rental} />
      ));
    }
  };

  useEffect(() => {
    createUser();
  }, []);
  return (
    <>
      <div className="rentalCards">{loadRentals()}</div>
    </>
  );
}

export default Rentals;
