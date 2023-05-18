import React, { useState } from "react";
import "./Calculator.css";
import { useNavigate } from "react-router-dom";

function Calculator() {

const navi = useNavigate();

const h =()=>{
  navi('/')
}

  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEquals = () => {
    setInput(eval(input).toString());
  };

  return (
    <>
    <div> <p className="fs-1 font-monospace fw-bolder text-danger d-flex justify-content-center bg-dark container">Caluculator Using useState</p></div>
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button className="operator" onClick={() => handleClick("-")}>
          -
        </button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button className="operator" onClick={() => handleClick("*")}>
          *
        </button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button className="operator" onClick={() => handleClick("/")}>
          /
        </button>
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="equal" onClick={handleEquals}>
          =
        </button>
      </div>
    </div>
    <hr></hr>

    <button onClick={h}>home</button>
    </>
  );
}

export default Calculator;
