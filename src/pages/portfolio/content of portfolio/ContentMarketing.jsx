import { image2 } from "../../../assets/image_of_DM";

function ContentMarketing() {
  return (
    <>
      <div className="image_main">
        {image2.map((item, index) => (
          <div key={index} className="image_sub_main">
            <img src={item.img} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default ContentMarketing;
