import { NavLink } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeadphonesSimple } from "react-icons/fa6";

import "./header.css";
import { useState } from "react";
function Header() {
  const [change, setChange] = useState(false);

  return (
    <>
      <div className="main">
        <div className="heading">
          <ul className="header">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div className="titleAndHamburger">
          <div className="title">Subha Bihani Digital Media Pvt. Ltd</div>
          <div className="hamburger" onClick={() => setChange(!change)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className={change ? "open" : "navicon"}>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/aboutUs"}>About</NavLink>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contactUs"}>Contact</NavLink>
        </div>
      </div>
      <div className="main2">
        <div className="heading">
          <div className="heading1">
            <div>
              <FaHeadphonesSimple />
            </div>
            <div>24 x 7 Technical Support</div>
          </div>
          <div>
            <ul className="header">
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedinIn />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
