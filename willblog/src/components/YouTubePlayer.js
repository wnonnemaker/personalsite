
import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import '../styles/YouTubePlayer.css'

const YouTubeVideo = ({ videoId, isMuted }) => {
  const autoplayUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

  


  return (
    <div >
      <ReactPlayer
          className='react-player'
          url={autoplayUrl}
          width='740px'
          height='405px'
          playing = {true}
          volume = {.3}
          muted= {isMuted}
          controls = {true}

        />
      
    </div>
  );
};

export default YouTubeVideo;