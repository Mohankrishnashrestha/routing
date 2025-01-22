import { useParams } from "react-router";
import { news } from "../../../assets/news";
import "./description.css";
function Description() {
  const params = useParams();
  if (isNaN(params.description)) {
    alert("invalid parameter");
  }
  const number = parseInt(params.description);
  const filterdatas = news.filter((a) => a.id === number);
  if (filterdatas.length === 0) {
    alert("parameter doesn't exit");
  }
  const data = filterdatas[0];
  return (
    <div>
      <div className="background_of_description">
        <div className="overlay">
          <h4>{data.heading}</h4>
        </div>
      </div>
      <div className="content">aba ya bata baki xa</div>
    </div>
  );
}

export default Description;
