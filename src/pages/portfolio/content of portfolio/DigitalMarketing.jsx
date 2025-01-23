import { image } from "../../../assets/image_of_DM";
import "./digitalmarketing.css";
function DigitalMarketing() {
  return (
    <>
      <div className="image_main">
        {image.map((item, index) => (
          <div key={index} className="image_sub_main">
            <img src={item.img} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default DigitalMarketing;
