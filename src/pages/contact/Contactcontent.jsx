import "./contactcontent.css";
import { CiMobile3 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

function Contactcontent() {
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
      <div className="contactcontent_form">
        <div>
          <h4>Any Query?</h4>
        </div>
        <div className="form">
          <form action="#">
            <div className="name">
              <input type="text" placeholder="Enter name" />
            </div>
            <div className="email">
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="message">
              <input type="text" placeholder="Enter Message" />
            </div>
          </form>
        </div>
        <div className="button">
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
}

export default Contactcontent;
