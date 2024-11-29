import React, {useState} from 'react';
import sergeant from '../assets/images/sergeant.png';
import sergeantOpen from '../assets/images/sergeant-open.png';
import textBox from '../assets/images/textBox2.png';
import '../styles/Sergeant.css'

const Sergeant = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="sergeant-style"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      {isHovered ? (
        <div>
        <img src={sergeantOpen} alt="sergeant-open" className = 'sergeant-open-style' />
        <img src={textBox} alt="textBox" className= 'box-style' />
        <p className='gamer-text'>
        You call this a webpage? There's way too much white space! <br/>
        The use is unintuitive! There are rules you know!
        </p>
        </div>
      ) : (
        <img src={sergeant} alt="sergeant" className= 'sergeant-style' />
        
      )}
    </div>
  );
};

export default Sergeant;