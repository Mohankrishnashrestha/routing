import { image3 } from "../../../assets/image_of_DM";

function SeoServices() {
  return (
    <>
      <div className="image_main">
        {image3.map((item, index) => (
          <div key={index} className="image_sub_main">
            <img src={item.img} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default SeoServices;
