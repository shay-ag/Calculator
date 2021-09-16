import React, {useState} from 'react';
import './App.css';

function App() {

  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState("");

  const operations = ['+', '-', '*', '/', '.'];

  const createDigit = () => {
    const digits = [];

    for( let i=1; i<10; i++ ) {
        digits.push(
          <button key={i} onClick={ () => { updateCalculator(i.toString())}}> 
          {i} 
          </button>
        )
    }
    return digits;
  };

  const updateCalculator = (value) => {

    if(
      operations.includes(value) && calculation === '' || operations.includes(value) && operations.includes(calculation.slice(-1))
    ){
      return;
    }

    setCalculation(calculation + value);

    if(!operations.includes(value)){
      setResult(eval(calculation + value));
    }
  }

  const updateResult = () => {
    setCalculation(eval(calculation).toString());
  }

  const deleteLast = () => {
    if( calculation === ""){
      return;
    }
    const value = calculation.slice(0,-1);
    setCalculation(value);
    setResult("");
  }  

  const clearEntry = () => {
    if( calculation === ""){
      return;
    }
    setCalculation("");
    setResult("");
  }

  return (
    <div className="App">
      <div className="calculator">
        
        <div className="display">
          { result ? <span>({result}) </span> : "" }
          { calculation || "0" }
        </div>

        <div className="operators">
          <button onClick={ () => { updateCalculator('+')}}><i class="fas fa-plus"></i></button>
          <button onClick={ () => { updateCalculator('-')}}><i class="fas fa-minus"></i></button>
          <button onClick={ () => { updateCalculator('*')}}><i class="fas fa-times"></i></button>
          <button onClick={ () => { updateCalculator('/')}}><i class="fas fa-divide"></i></button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={clearEntry}>CE</button>
        </div>

        <div className="digits">
          { createDigit() }
          <button onClick={ () => { updateCalculator('0')}}>0</button>
          <button onClick={ () => { updateCalculator('.')}}>.</button>
          <button onClick={updateResult}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
