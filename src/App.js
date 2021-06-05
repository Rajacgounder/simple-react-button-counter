import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState(0);
  // function Increment() {
  //   setNumber(number + 1);
  // }
  function Decrement() {
    // if (number > 0) {
    //   setNumber(number - 1);
    // } else {
    //   return null;
    // }
    setNumber(number > 0 ? number - 1 : null);
  }
  return (
    <div className="App">
      <h1>Button Count</h1>
      <h1>{number}</h1>
      <button
        ClassName="button1"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button className="button2" onClick={Decrement}>
        -
      </button>
    </div>
  );
}
