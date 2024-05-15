import React, { useState } from 'react';
import './css/Calculation.css';

const Calculation = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput((prevInput) => prevInput + e.target.name);
  };

  const calculate = () => {
    try {
        // eslint-disable-next-line
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display-msg">
        <div className="result1">{result}</div>
        <div className="input1">{input}</div>
      </div>
      <div className="buttons">
        <button onClick={clear} className="button ac">AC</button>
        <button name="/" onClick={handleInput} className="button operator">÷</button>
        <button name="*" onClick={handleInput} className="button operator">×</button>
        <button name="7" onClick={handleInput} className="button">7</button>
        <button name="8" onClick={handleInput} className="button">8</button>
        <button name="9" onClick={handleInput} className="button">9</button>
        <button name="-" onClick={handleInput} className="button operator">-</button>
        <button name="4" onClick={handleInput} className="button">4</button>
        <button name="5" onClick={handleInput} className="button">5</button>
        <button name="6" onClick={handleInput} className="button">6</button>
        <button name="+" onClick={handleInput} className="button operator">+</button>
        <button name="1" onClick={handleInput} className="button">1</button>
        <button name="2" onClick={handleInput} className="button">2</button>
        <button name="3" onClick={handleInput} className="button">3</button>
        <button onClick={calculate} className="button eqlval">=</button>
        <button name="0" onClick={handleInput} className="button zero">0</button>
        <button name="." onClick={handleInput} className="button">.</button>
      </div>
    </div>
  );
};

export default Calculation;