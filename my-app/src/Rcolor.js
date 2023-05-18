import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rcolor() {
  const [color, setColor] = useState("#000000"); // initialize with black color

  function changeColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // generate random color using string literals
    setColor(randomColor);
  }

  const navi = useNavigate();

  const f = ()=>{
    navi('/form')
  }
  return (
   <div> 
   <div style={{ backgroundColor: color, height: "10vh" }}>
     <button onClick={changeColor}>Change color</button>
    
    </div>
   
   <button onClick={f}>form</button>
    </div>

  );
}

export default Rcolor;
