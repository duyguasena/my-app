import React, { useState } from "react";

function StateSample() {
  const [color, setColor] = useState("orange");

  var randomColors = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#000000",
    "#FFFFFF",
    "#808080",
    "#FFA500",
    "#FFC0CB",
  ];

  const changeColor = () => {
    var randomColorIndex = Math.floor(Math.random() * 10);
    setColor(randomColors[randomColorIndex]);
  };
  return (
    <>
      <button>Change Div Color</button>
      <div
        style={{
          with: 300,
          height: 300,
          borderStyle: "solid",
          backgroundColor: color,
        }}
      ></div>
    </>
  );
}
export default StateSample;
