import React from 'react';
import exampleImage from '../assets/images/sergeant copy.png';
import '../App.css'

const Sergeant = () => {
  return (
    <div className="sergeant-style">
      <img src={exampleImage} alt="sergeant" style={{ width: '500px', height: 'auto'}} />
    </div>
  );
};

export default Sergeant;