import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Link as LLB } from "react-router-dom";

function Navbar() {
  const [height, setHeight] = useState();
  const navbar = useRef();

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
          <Link to="experience" smooth={true} offset={-height - 5}>
            Find PGs
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} offset={-height - 5}>
            Rent a Room
          </Link>
        </li>
        <li>
          <LLB to="/register" className="signup">
            Sign In/Register
          </LLB>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
