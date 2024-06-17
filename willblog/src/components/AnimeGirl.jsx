import React from 'react';
import exampleImage from '../assets/images/anime.png';
import '../App.css'

const AnimeGirl = () => {
  return (
    <div className="anime-style">
      <img src={exampleImage} alt="anime" style={{ width: '450px', height: 'auto'}} />
    </div>
  );
};

export default AnimeGirl;