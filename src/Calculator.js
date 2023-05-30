import React, { useState, useEffect } from "react";
/* eslint-disable */
const Calculator = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      const allowedKeys = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "*",
        "/",
        ".",
        "Enter",
        "Backspace",
      ];
      if (allowedKeys.includes(key)) {
        if (key === "Backspace") {
          e.preventDefault(); // Prevent the default backspace behavior (navigating back in the browser)
          handleBackspace();
        } else {
          handleInput(key);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleInput = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const handleBackspace = () => {
    setResult((prevResult) => prevResult.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  return (
    <div className="calculator">
      <input type="text" value={result} readOnly />
      <div className="keypad">
        <button name="1" onClick={() => handleInput("1")}>
          1
        </button>
        <button name="2" onClick={() => handleInput("2")}>
          2
        </button>
        <button name="3" onClick={() => handleInput("3")}>
          3
        </button>
        <button name="4" onClick={() => handleInput("4")}>
          4
        </button>
        <button name="5" onClick={() => handleInput("5")}>
          5
        </button>
        <button name="6" onClick={() => handleInput("6")}>
          6
        </button>
        <button name="7" onClick={() => handleInput("7")}>
          7
        </button>
        <button name="8" onClick={() => handleInput("8")}>
          8
        </button>
        <button name="9" onClick={() => handleInput("9")}>
          9
        </button>
        <button name="0" onClick={() => handleInput("0")}>
          0
        </button>
        <button name="+" onClick={() => handleInput("+")}>
          +
        </button>
        <button name="-" onClick={() => handleInput("-")}>
          -
        </button>
        <button name="*" onClick={() => handleInput("*")}>
          *
        </button>
        <button name="/" onClick={() => handleInput("/")}>
          /
        </button>
        <button name="." onClick={() => handleInput(".")}>
          .
        </button>
        <button onClick={clear}>Clear</button>
        <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
};

export default Calculator;