import React from "react";
import "./stylings/Landing.css";

function Landing() {
  return (
    <>
      <div className="landing">
        <div className="landing-text">
          <h1>
            Find & Rent <br></br>Rooms/PGs with Ease
          </h1>
          <p>
            Got a job in new city but no place to live? Want to rent your room
            to someone? Worry no more, we are here to help you find/rent rooms
            in your city. <br></br>
            <b>“Finding cool roommates, now made easy”</b>
          </p>
        </div>
        <img
          src="./images/cool roommate.png"
          alt="cool-girl-illustration"
        ></img>

        <div className="search-box">
          <ul className="search-list">
            <li>
              <h3>Location</h3>
              <p>Which city are you looking for?</p>
            </li>

            <li>
              <h3>Housemates</h3>
              <p>Total tenants along with you </p>
            </li>

            <li>
              <h3>Budget</h3>
              <p>Minimum rent per month</p>
            </li>
          </ul>

          <div className="search-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
