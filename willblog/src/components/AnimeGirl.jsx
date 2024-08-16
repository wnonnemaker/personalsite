import React, {useState} from 'react';
import exampleImage from '../assets/images/anime.png';
import textBox from '../assets/images/textBox2.png';
import '../AnimeGirl.css'

const AnimeGirl = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="anime-style"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <div className='group2'>
        <img className = "text-bubble" src={textBox} alt="anime" />
        <img className = "anime-girl2" src={exampleImage} alt="anime" />
        <p className='text'>
          This nerd actually coded some stuff...<br/>
          you might like it...
          if you're a nerd...
        </p>
        </div>
      ) :
      (
        <img src={exampleImage} className = "anime-girl" alt="anime"  />
      )}
      
    </div>
  );
};

export default AnimeGirl;