import React from "react";
import { useState, useEffect } from "react";

function RentalCard(props) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(props._id);
  }, []);

  //location id, apartmentype, vacancy, description, roomtype, rent
  return (
    <>
      <div className="rentalCard">
        <div className="imageContainer">
          <img
            src="https://rajatsatashiya.github.io/roommatefinder/bg%20pics/bg-3.jpg"
            className="rentalImage"
          ></img>
        </div>

        <div className="detailsContainer">
          <div className="location">
            {props.rental.location.city}, {props.rental.location.country}
          </div>

          <div className="staydescription">{props.rental.description}</div>
          <div className="stayDetails">
            <p>
              <b>Vacancy: </b>
              {props.rental.vacancy}
            </p>
            <p>
              <b>Type: </b> {props.rental.apartmentType}
            </p>
          </div>
        </div>
        <p className="rent">
          <b>₹{props.rental.rent} a month</b>
        </p>
      </div>
    </>
  );
}

export default RentalCard;
