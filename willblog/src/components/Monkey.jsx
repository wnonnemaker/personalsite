import React, {useState} from 'react';
import exampleImage from '../assets/images/monkey.png';
import textBubble from '../assets/images/textBox3.png';
import '../App.css'
import '../Monkey.css'

const Monkey = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [oneText, setText] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setText(!oneText)
  };

  return (
    <div className="monkey-style"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      {isHovered ? (
      <div>
        <img className = 'monkey-image' src={exampleImage} alt="monkey" style={{ width: '350px', height: 'auto'}} />
        <img className = 'text-bubble-monkey' src={textBubble} alt="textBubble" style={{ width: '350px', height: 'auto'}} />
        {oneText ? (
          <p className='monkey-talk'>oo oo ahh ahh <br/> i want a banana</p>
        ) : (
          <p className='monkey-talk'>
            check out some cool <br/>
            youtube videos below!
          </p>
        )}
      </div>
    ) : (
      <div>
      <img className='monkey-image2' src={exampleImage} alt="monkey" style={{ width: '350px', height: 'auto'}} />
      </div>
    )}
    </div>
  );
};

export default Monkey;