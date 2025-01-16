import "./portfolio.css";
import Portfoliocontent from "./Portfoliocontent";
function Portfolio() {
  return (
    <>
      <div className="portfolio_main">
        <div className="portfolio_background">
          <div className="portfolio_overlay">
            <div className="portfolio_title">
              <h1>Portfolio</h1>
            </div>
            <div>
              <p>Home {">"}Portfolio</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfoliocontent">
        <Portfoliocontent />
      </div>
    </>
  );
}

export default Portfolio;
