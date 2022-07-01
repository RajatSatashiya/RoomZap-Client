import React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import "./stylings/Navbar.css";
import { Link } from "react-scroll";
import { Link as LLB } from "react-router-dom";
import AuthContext from "../context/authContext";

function Navbar() {
  const [height, setHeight] = useState();
  const navbar = useRef();
  const authContext = useContext(AuthContext);

  const buttonValue = (flag) => {
    if(flag) {
      return (
          <LLB to="/" onClick={authContext.logout} className="signup">
            Sign Out 
          </LLB>
      )
    } else {
      return (
          <LLB to="/register" className="signup">
            Sign In/Register
          </LLB>
      )
    }
  }

  useEffect(() => {
    setHeight(navbar.current.offsetHeight);
  }, []);
  return (
    <nav ref={navbar} className="nav2">
      <LLB to="/">
        <h3 className="project-title">RoomZap</h3>
        </LLB>
      <ul className="nav-list">
        <li>
          {/* <Link to="experience" smooth={true} offset={-height - 5}> */}
          <LLB to="/rentals" className="llblink">
            Find PGs
          </LLB>
          {/* </Link> */}
        </li>
        <li>
          <LLB to="/createRental" className="llblink">
            Rent a Room
          </LLB>
        </li>
        <li>
          {buttonValue(authContext.isLoggedIn)}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
