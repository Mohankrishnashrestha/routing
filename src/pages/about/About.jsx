import AboutContent from "./AboutContent";
import "./about.css";
function About() {
  return (
    <div>
      <div className="pageTitle">
        <div className="titleOFAbout">
          <div>
            <h1> About Us</h1>
          </div>
          <div>Home>About US</div>
        </div>
      </div>
      <div>
        <AboutContent />
      </div>
    </div>
  );
}

export default About;
