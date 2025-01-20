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
  }
  const filterdata = filterdatas[0];
  return (
    <>
      <div className="description_main">
        <div className="background_of_description">
          <div className="descrioption_overlay">{filterdata.name}</div>
        </div>
      </div>
    </>
  );
}

export default Desc;

// import { useParams } from "react-router";
// import { data } from "../../assets/data";
// function Desc() {
//   const params = useParams();
//   if (isNaN(params.desc)) {
//     return <div style={{ marginTop: "10rem" }}>Invalid parameter</div>;
//   }
//   const number = parseInt(params.desc);
//   const filteredDatas = data.filter((item) => item.id === number);
//   if (filteredDatas.length === 0) {
//     return <div style={{ marginTop: "10rem" }}>User NOt Found</div>;
//   }
//   const filteredData = filteredDatas[0];

//   return <div style={{ marginTop: "10rem" }}>{filteredData.name}</div>;
// }

// export default Desc;
