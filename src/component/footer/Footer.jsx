import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function submit() {
    if (email === "") {
      setError("there is no email filled");
      return;
    }
    setEmail("");
    setError("");
  }
  return (
    <>
      <div className="mainOfFooter">
        <div className="footerHeading">
          <div className="heading">
            <h3>Subha Bihani Digital Media Pvt. Ltd</h3>
          </div>
          <div>
            <p>
              Subha Bihani Digital Media PVT. LTD is a results-driven digital
              marketing agency in Nepal focused on connecting brands to people.
              We are a one-stop solution provider for all your Digital Marketing
              requirements.it is one of the best digital media to hand over
            </p>
          </div>
          <div>
            <ul className="logosOfFooter">
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
        <div className="quickLinks">
          <div className="heading">
            <h3>Quick Links</h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <div>
            <h3>Legal</h3>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Legal Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Report</a>
              </li>
              <li>
                <a href="#">Terms Of Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="getInTouch">
          <div>
            <h3>Get In Touch</h3>
          </div>
          <ul>
            <li>
              <div>
                <CiLocationOn />
              </div>
              <div>Mid-baneshwor, Kathmandu</div>
            </li>
            <li>
              <div>
                <MdEmail />
              </div>
              <div>info@subhabihani.com.np</div>
              <div>info@subhabihani123.com.np</div>
            </li>
            <li>
              <div>
                <FaPhoneAlt />
              </div>
              <div>01-4435890</div>
            </li>
          </ul>
          <div>
            <div>{error}</div>

            <form action="#" className="sendEmail">
              <div className="sendmessage">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="text"
                />
              </div>
              <div className="submit">
                <input type="submit" onClick={submit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
