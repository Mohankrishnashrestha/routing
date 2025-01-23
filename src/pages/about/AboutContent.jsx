import "./aboutcontent.css";
import { news } from "../../assets/news";
import { NavLink } from "react-router";

function AboutContent() {
  return (
    <div className="helloiamcristinoronaldo">
      <div className="about_main">
        <div className="paragraphOfAbout">
          <div className="aboutUs">About Us</div>
          <div className="title">Subha Bihani Digital Media Pvt. Ltd</div>
          <div className="paragraph">
            <p>
              Subha Bihani Digital Media PVT. LTD is a results-driven digital
              marketing agency in Nepal focused on connecting brands to people.
              We are a one-stop solution provider for all your Digital Marketing
              requirements. We offer an
            </p>
            <p>
              Our expertise comprises specializing in an innovative marketing
              solution involving creative Search Engine Optimization (SEO),
              Social Media campaign, Email marketing, Content marketing,
              influencer marketing.
            </p>
          </div>
        </div>
        <div className="imageOfAbout">
          <img src="public/images/aboutimage.svg" alt="no image" />
        </div>
      </div>
      <div className="news">
        <ul className="newsArea">
          {news.map((item) => (
            <li className="newsbox" key={item.id}>
              <NavLink to={"/aboutUs/" + item.id}>
                <div className="heading">
                  <h3> {item.heading}</h3>
                </div>
                <div className="image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="description">{item.description}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutContent;
