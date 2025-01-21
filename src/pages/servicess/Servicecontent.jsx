// import { data } from "../../assets/data";
// import { NavLink } from "react-router";
// function Servicecontent() {
//   return (
//     <div>
//       <div>data links</div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <NavLink to={"/service/" + item.id}>{item.name}</NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Servicecontent;
import { data } from "../../assets/data";
import { NavLink } from "react-router";
import "./servicescontent.css";
function Servicecontent() {
  return (
    <>
      <ul className="main_part_of_service">
        {data.map((item) => (
          <li className="dataOfTheService" key={item.id}>
            <NavLink to={"/service/" + item.id}>
              <div className="item">
                <div className="service_image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="data_of_service">
                  <h3>{item.name}</h3>
                </div>
                <div className="data_of_service">{item.description}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Servicecontent;
