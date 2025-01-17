/* eslint-disable react/prop-types */
import "./heading.css";
function Heading({ setContent }) {
  return (
    <div>
      <ul className="heading_of_content_data">
        <li onClick={() => setContent("contentMarketing")}>
          Content Marketing
        </li>
        <li onClick={() => setContent("digitalMarketing")}>
          Digital Marketing
        </li>
        <li onClick={() => setContent("seoservices")}>SEO Services</li>
      </ul>
    </div>
  );
}

export default Heading;
