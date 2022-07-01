import React from "react";
import { Link } from "react-router-dom";
import "./stylings/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <h2 className="project-title footer-title">RoomZap</h2>
        <div className="footer-desc">
          <div className="crucial-links">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Verify your account</li>
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>
                <li>Find Roommate/s</li>
              </ul>
            </div>
            <div>
              <h4>Legal</h4>
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <ul>
                <li>Company</li>
                <li>Careers</li>
                <li>Refund Policy</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li>E-36, Sector 3, Nikol GJ, India 382350</li>
                <li>rajat09satashiya@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="bottom-desc">
            <div>
              Copyright © 2021-2022 Roommate Finder. All rights reserved
            </div>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
