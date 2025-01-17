import Footer from "../../component/footer/Footer";
import AboutContent from "../about/AboutContent";
import "./home.css";
function Home() {
  return (
    <div className="backgroundImage">
      <div className="start">
        <div className="name">
          <h4>Subha Bihani Digital Media Pvt. Ltd</h4>
        </div>
        <div className="slogan">
          <h1>Empower Your Business Traffic at The Top</h1>
        </div>
        <div className="paragraph">
          <p>
            Holisticly procrastinate mission-critical convergence with reliable
            customer service. Assertively underwhelm idea-sharing for impactful
            solutions.
          </p>
        </div>
        <div className="button">
          <button>Get Start Now</button>
        </div>
      </div>
      <div className="about">
        <AboutContent />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
