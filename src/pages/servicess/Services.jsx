import Servicecontent from "./Servicecontent";
import "./services.css";

function Services() {
  return (
    <>
      <div className="service_main">
        <div className="service_background">
          <div className="service_overlay">
            <div className="service_title">
              <h1>Services</h1>
            </div>
            <div>
              <p>Home {">"}services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="servicecontent">
        <Servicecontent />
      </div>
    </>
  );
}

export default Services;
