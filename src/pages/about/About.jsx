import Footer from "../../component/footer/Footer";
import AboutContent from "./AboutContent";
import "./about.css";
function About() {
  return (
    <div>
      <div className="pageTitle">
        <div className="overlay">
          <div className="about_title">
            <h1> About Us</h1>
          </div>
          <div>
            {" "}
            <p>Home {">"}About US</p>
          </div>
        </div>
        <div className="titleOFAbout"></div>
      </div>
      <div>
        <AboutContent />
        <Footer />
      </div>
    </div>
  );
}

export default About;
