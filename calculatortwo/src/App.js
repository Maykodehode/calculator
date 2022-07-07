import { useState } from "react";


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    if (ops.includes(value) && calc === "" || 
        ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }

      setCalc(calc + value);
      if (!ops.includes(value)) {
        setResult(eval(calc + value).toString());
      }
  }

  // A loop creating buttons from 0 to 9//
  const createDigits= () => {
  const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button 
          onClick={() => updateCalc(i.toString()
          )} key={i}>
            {i}
          </button>
      )
    }
  return digits;
}

  const calculate = () => {
  setCalc(eval(calc).toString());
}

// DEL btn //
  const deleteLast = () => {
  if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
  
  // RESET btn //
  const delAll = () => {
    setCalc("");
  }

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          { result ? <span>({ result })</span> : "" }
          <br></br>
          <br></br>
          { calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button className="delbtn" onClick={ deleteLast }>DEL</button>
          <button className="delbtn" onClick={ delAll }>RESET</button>
        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button className="equalbtn" onClick={ calculate }>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
