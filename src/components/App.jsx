import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [isMouseOver, setIsMouseOver] = React.useState(false);
  const button = document.querySelector("button");
  function headingClick() {
    setHeadingText("Submitted");
  }
  function colorChange() {
    setIsMouseOver(true);
  }
  function colorChangew() {
    setIsMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={headingClick}
        onMouseOver={colorChange}
        onMouseOut={colorChangew}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
