import { useState } from "react";
import "./portfoliocontent.css";
import Contnet from "./content of portfolio/Contnet";
import Heading from "./content of portfolio/Heading";

function Portfoliocontent() {
  const [content, setContent] = useState("digitalMarketing");
  return (
    <div className="portfoliocontent_main">
      <div className="previousProject">Previous Project</div>
      <div className="headng_of_portfolio">Our Portfolio</div>
      <div className="navigation_of_portfolio">
        <Heading setContent={setContent} />

        <Contnet content={content} />
      </div>
    </div>
  );
}
export default Portfoliocontent;
