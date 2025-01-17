import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footerHeading">
        <h5>Subha Bihani Digital Media Pvt. Ltd</h5>
        <p>
          Subha Bihani Digital Media PVT. LTD is a results-driven digital
          marketing agency in Nepal focused on connecting brands to people. We
          are a one-stop solution provider for all your Digital Marketing
          requirements.
        </p>
        <div>
          <ul>
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
    </>
  );
}

export default Footer;
