import { useState } from "react";
import "./contactcontent.css";
import { CiMobile3 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
const emailReg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
function Contactcontent() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function submit() {
    if (name === "") {
      setError("error is that the name is not filled");
      return;
    }
    if (email === "") {
      setError("error is that the email is not filled");
      return;
    }
    if (message === "") {
      setError("error is that the message is not filled");
      return;
    }
    if (!email.match(emailReg)) {
      setError("Email validation failed");
      return;
    }

    setName("");
    setError("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <div className="contactcontent_main">
        <div className="callUs">
          <div className="logo">
            <CiMobile3 />
          </div>
          <div className="info">
            <h5>Call Us</h5>
            <p> 01-4435890</p>
          </div>
        </div>
        <div className="visitUs">
          <div className="logo">
            <CiLocationOn />
          </div>
          <div className="info">
            <h5>Visit Us</h5>
            <p>Mid-Baneshwor, Nepal</p>
          </div>
        </div>
        <div className="mailUs">
          <div className="logo">
            <CiMail />
          </div>
          <div className="info">
            <h5>Mail Us</h5>
            <p>info@subhabihani.com.np</p>
          </div>
        </div>
      </div>
      <div className="form_and_location_in_contact">
        <div className="contactcontent_form">
          <div className="form">
            <div className="anyquery">
              <h3>Any Query?</h3>
            </div>
            <form action="#">
              <div className="name">
                <div>{error}</div>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  type="text"
                  placeholder="enter a name"
                />
              </div>

              <div className="email">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  type="email"
                  placeholder="enter email"
                />
              </div>
              <div className="message">
                <input
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  type="text"
                  placeholder="Enter Message"
                />
              </div>
              <div className="submit">
                <input type="submit" onClick={submit} />
              </div>
            </form>
          </div>
        </div>
        <div className="officeLocation">
          <div className="officeLocation_heading">
            <h2>Looking for a excellent Business idea?</h2>
            <p>
              Seamlessly deliver pandemic e-services and next-generation
              initiatives.
            </p>
            <button>Get Directions </button>
          </div>

          <hr />
          <div className="officeLocation_location">
            <h5>Our Office</h5>
            <address>
              Mid-Baneshwor <br />
              Kathmandu, Nepal
            </address>
            <span>Phone: 01-4435890</span>

            <span>
              <a href="#">info@subhabihani.com.np</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactcontent;
