import React, { useState } from 'react';
import './homepage.css';

const colors = ['red', 'blue', 'green'];

function ButtonList() {
  // Initialize `number` as a state variable
  const [number, setNumber] = useState(0);

  const increaseNumber = () => {
    setNumber(prevNumber => prevNumber + 1);
  };

  const decreaseNumber = () => {
    setNumber(prevNumber => prevNumber - 1);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  return (
    <>
      <h1>{number}</h1>
      <div className='color-container'>
        <div className='button-controls'>
          <button className='control-btn' onClick={increaseNumber}>Increase</button>
          <button className='control-btn' onClick={decreaseNumber}>Decrease</button>
          <button className='control-btn' onClick={resetNumber}>Reset</button>
        </div>
        <div className='color-buttons'>
          {colors.map((color, index) => (
            <button
              onClick={() => handleColorClicks(color)}
              key={index}
              className='color-btn'
              style={{
                backgroundColor: color,
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  );
  
}

const handleColorClicks = (color) => {
  alert(`You clicked color ${color}`);
};

export default ButtonList;
