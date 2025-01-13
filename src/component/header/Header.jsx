import { NavLink } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./header.css";
import { useState } from "react";
function Header() {
  const [change, setChange] = useState(false);

  return (
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
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/gallery"}>Gallery</NavLink>
      </div>
    </div>
  );
}

export default Header;
