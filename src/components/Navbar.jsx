import React from "react";
import { useRef, useState, useContext, useEffect } from "react";
import "./stylings/Navbar.css";
import { Link } from "react-scroll";
import { Link as LLB } from "react-router-dom";
import AuthContext from "../context/authContext";

function Navbar() {
  const [height, setHeight] = useState();
  const [sideshow, setSideshow] = useState(false);
  const [name, setName] = useState("RoomZap");
  const navbar = useRef();
  const authContext = useContext(AuthContext);

  const getUsername = async () => {
    try {
       const response = await fetch("/user", {
         method: "GET",
         headers: {
           "Content-Type": "application/json; charset=UTF-8",
           Authorization: `Bearer ${authContext.token}`,
         }
       })

       const data = await response.json();
       setName(data.message.firstname);
    } catch (e) {
      console.log(e);
    }
  }

  const buttonValue = (flag) => {
    if(flag) {
      return (
          // <LLB to="/" onClick={() => {authContext.logout()}, () => setSideshow(false)} className="llblink">
          //   Sign Out 
          // </LLB>
          <LLB to="/" onClick={authContext.logout} className="llblink">
            Sign Out 
          </LLB>
      )
    } else {
      return (
          <LLB to="/register" onClick={() => setSideshow(false)} className="llblink">
            Sign In/Register
          </LLB>
      )
    }
  }

  useEffect(() => {
    setHeight(navbar.current.offsetHeight);
    if(authContext.isLoggedIn) {
      getUsername();
    }
  }, [authContext.isLoggedIn]);
  return (
    <>
      <nav ref={navbar} className="nav2">
        <div className="nav-portion">
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
            <li className="profile-icon" onClick={() => {
              setSideshow(!sideshow)
            }}>
              {name[0].toUpperCase()}
            </li>
          </ul>
        </div>

        {sideshow && 
        <div className="sidebar-container">
            <ul className="profile-hover">
              <li>
                <LLB to="/dashboard" onClick={() => setSideshow(false)} className="llblink">
                Profile
                </LLB>
              </li>
              <li onClick={() => setSideshow(false)}>
                {buttonValue(authContext.isLoggedIn)}
              </li>
            </ul>
        </div>
        }
      </nav>

      
      
    </>
  );
}

export default Navbar;
