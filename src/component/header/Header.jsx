import { NavLink } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeadphones } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

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
          <div className="title">Subha Bihani</div>
          <div className="hamburger" onClick={() => setChange(!change)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className={change ? "open" : "navicon"}>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/aboutUs"}>About Us</NavLink>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
          <NavLink to={"/service"}>Services</NavLink>
          <NavLink to={"/contactUs"}>Contact Us</NavLink>
        </div>
      </div>
      <div className="main2">
        <div className="heading">
          <div className="heading1">
            <div className="number">
              <div>
                <FaHeadphones />
              </div>
              <div>24 x 7 Technical Support</div>
            </div>
            <div className="number">
              <div>
                {" "}
                <FaPhoneAlt />
              </div>{" "}
              <div>01-4435890 </div>
            </div>
          </div>
          <div className="heading2">
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

        <div className="navigation">
          <div className="title">Subha Bihani Digital Media Pvt. Ltd</div>
          <div className="navicons">
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
            <NavLink to={"/portfolio"}>Portfolio</NavLink>
            <NavLink to={"/service"}>Services</NavLink>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
