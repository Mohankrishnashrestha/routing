import "./desc.css";
import { data } from "../../../assets/data";
import { useParams } from "react-router";
function Desc() {
  const params = useParams();
  if (isNaN(params.desc)) {
    alert("Invalid parameter");
  }
  const number = parseInt(params.desc);
  const filterdatas = data.filter((item) => item.id === number);
  if (filterdatas.length === 0) {
    alert("user not found");
    return <></>;
  }
  const filterdata = filterdatas[0];

  return (
    <>
      <div className="description_main">
        <div className="background_of_description">
          <div className="descrioption_overlay">{filterdata.name}</div>
        </div>
      </div>
      <div className="content_of_description">
        <div className="imageOfTheDescription">
          <img src={filterdata.image2} alt="image2" />
        </div>
        <div className="defineOfSocialMedia">
          <div>
            <h3>{filterdata.name}</h3>
          </div>
          <div>
            <p>
              {filterdata.definaton_1_1}
              {filterdata.definaton_1_2}
            </p>
          </div>
          <div>
            <p>
              {filterdata.defination_2_1}
              {filterdata.defination_2_2}
              {filterdata.defination_2_3}
            </p>
          </div>
        </div>
      </div>
      <div className="question">
        <div>
          <h3>{filterdata.question}</h3>
        </div>
        <div>
          <p>{filterdata.answer_1}</p>
          <p>{filterdata.answer_2}</p>
          <p>{filterdata.answer_3}</p>
        </div>
      </div>
    </>
  );
}

export default Desc;
