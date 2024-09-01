// import React, { useState } from "react";

const Empty = ({ addcolor, hexcode, textcolor, setAddcolor }) => {
  //const [color, setColor] = useState("");
  return (
    <section
      className="square"
      style={{ backgroundColor: addcolor, color: textcolor ? "#000" : "#FFF" }}
    >
      {/* <label>Empty Value</label> */}
      <p>{addcolor ? addcolor : "empty value"}</p>
      <p>{hexcode ? hexcode : " "}</p>
    </section>
  );
};

export default Empty;
