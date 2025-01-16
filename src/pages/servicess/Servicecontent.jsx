import "./servicescontent.css";
function Servicecontent() {
  return (
    <div className="servicecontent_main">
      <div className="servicecontent_heading">
        <div className="servicecontent_title">Our Services</div>
        <div className="servicecontent_slogan">What Can We Do For You</div>
      </div>
      <div className="servicecontent_content">
        <div className="socialMediaMarketing">
          <div className="image_of_social">
            <div className="overlay_image">
              <img src="public/images/services/social.png" alt="" />
            </div>
          </div>
          <div className="content_of_socialmediamarketing">
            <h3>
              <a href="#">Social Media Marketing</a>
            </h3>
            <p>Social media marketing is the promotion of a product</p>
          </div>
        </div>
        <div className="influencerMarketing">
          <h3>
            <a href="#">Influencer Marketing</a>
          </h3>
          <p>Influencer Marketing is about choosing the right influencer for</p>
        </div>
        <div className="contentMarketing">
          <h3>
            <a href="#">Content Marketing</a>
          </h3>
          <p>In the digital world content is considered as a</p>
        </div>
        <div className="seo">
          <h3>
            <a href="#">SEO</a>
          </h3>
          <p>SEO is the art of using various tools, techniques,</p>
        </div>
        <div className="emailMarketing">
          <h3>
            <a href="#">Email Marketing</a>
          </h3>
          <p>Email marketing is a very effective strategy to increase</p>
        </div>
        <div className="digitalMarketing">
          <h3>
            <a href="#">Digital Marketing</a>
          </h3>
          <p>In this field of digital marketing, we manage</p>
        </div>
      </div>
    </div>
  );
}

export default Servicecontent;
