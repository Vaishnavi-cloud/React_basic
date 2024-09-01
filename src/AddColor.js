import React from "react";
import colorNames from "colornames";
const AddColor = ({ addcolor, setAddcolor, hexcode, setHexcode }) => {
  return (
    <div>
      <input
        type="text"
        value={addcolor}
        placeholder="add color"
        onChange={(e) => {
          setAddcolor(e.target.value);
          setHexcode(colorNames(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default AddColor;
