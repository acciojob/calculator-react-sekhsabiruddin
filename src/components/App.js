import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  function addValue(e) {
    // console.log(e.target.innerHTML);
    setValue((prev) => (prev += e.target.innerHTML));
  }
  function equal() {
    setValue(eval(value));
  }
  function clearValue() {
    setValue("");
  }
  return (
    <div className="container">
      <input type="text" value={value} />
      <br />
      <button onClick={clearValue}>c</button>
      <button onClick={addValue}>/</button>
      <button onClick={addValue}>*</button>
      <button onClick={addValue}>-</button>
      <br />
      <button onClick={addValue}>7</button>
      <button onClick={addValue}>8</button>
      <button onClick={addValue}>9</button>
      <button onClick={addValue}>+</button>
      <br />
      <button onClick={addValue}>1</button>
      <button onClick={addValue}>2</button>
      <button onClick={addValue}>3</button>
      <button onClick={equal}>=</button>
      <br />

      <button onClick={addValue}>0</button>
      <button onClick={addValue}>.</button>
    </div>
  );
}

export default App;
