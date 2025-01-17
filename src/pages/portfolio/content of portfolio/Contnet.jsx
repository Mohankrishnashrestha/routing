/* eslint-disable react/prop-types */
import ContentMarketing from "./ContentMarketing";
import DigitalMarketing from "./DigitalMarketing";
import SeoServices from "./SeoServices";

function Contnet({ content }) {
  switch (content) {
    case "contentMarketing":
      return <ContentMarketing />;
    case "digitalMarketing":
      return <DigitalMarketing />;
    case "seoservices":
      return <SeoServices />;
  }
}

export default Contnet;
