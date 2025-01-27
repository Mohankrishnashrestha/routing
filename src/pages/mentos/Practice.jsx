import { useState } from "react";

function Practice() {
  const [type, setType] = useState();
  const [saved_data, setsaved_data] = useState("");
  // function data1(name, callback) {
  //   console.log("this is from data 1" + "  " + name);
  //   callback();
  // }
  // function data2() {
  //   console.log("hello i am cristino ronaldo");
  // }
  // data1("rajan", data2);
  function save() {
    setsaved_data(type);
  }

  return (
    <div>
      Practice
      <div className="type">
        <input
          type="text"
          onChange={(e) => {
            setType(e.target.value);
            console.log(e.target.value);
          }}
          value={type}
        />
        <button onClick={save}>save this item</button>
      </div>
      <div>{saved_data}</div>
    </div>
  );
}

export default Practice;
