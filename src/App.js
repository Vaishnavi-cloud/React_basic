import Empty from "./Empty";
import AddColor from "./AddColor";
// import ToggleColor from "./ToggleColor";
import React, { useState } from "react";
function App() {
  const [addcolor, setAddcolor] = useState("");
  const [hexcode, setHexcode] = useState("");
  const [textcolor, setTextcolor] = useState(true);
  return (
    <div className="App">
      <h1>color check</h1>
      <Empty addcolor={addcolor} hexcode={hexcode} textcolor={textcolor} />
      <AddColor
        addcolor={addcolor}
        hexcode={hexcode}
        setHexcode={setHexcode}
        setAddcolor={setAddcolor}
        textcolor={textcolor}
        setTextcolor={setTextcolor}
      />
      {/* <ToggleColor textcolor={textcolor} setTextcolor={setTextcolor} /> */}

      <button type="button" onClick={(e) => setTextcolor(!textcolor)}>
        Toggle
      </button>
    </div>
  );
}

export default App;
