import "./aboutcontent.css";
function AboutContent() {
  return (
    <div>
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
    </div>
  );
}

export default AboutContent;
