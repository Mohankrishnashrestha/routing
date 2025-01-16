import "./contact.css";
import Contactcontent from "./Contactcontent";
function Contact() {
  return (
    <>
      <div className="contact_main">
        <div className="contact_background">
          <div className="contact_overlay">
            <div>
              <h1>Contact Us</h1>
            </div>
            <div>
              {" "}
              <p>Home {">"} Contact</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contactcontent">
        <Contactcontent />
      </div>
    </>
  );
}

export default Contact;
