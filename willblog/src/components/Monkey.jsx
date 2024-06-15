import React from 'react';
import exampleImage from '../assets/images/monkey.png';
import '../App.css'

const Monkey = () => {
  return (
    <div className="monkey-style">
      <img src={exampleImage} alt="monkey" style={{ width: '350px', height: 'auto'}} />
    </div>
  );
};

export default Monkey;