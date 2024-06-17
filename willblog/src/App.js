import logo from './logo.svg';
import './App.css';
import Sergeant from './components/Sergeant';
import Monkey from './components/Monkey';
import AnimeGirl from './components/AnimeGirl';
import React, { useEffect } from 'react';




function App() {

  const videoId = 'tSIQThHrNIE?si=Sjm4wMMjJ7Wf8lDw';

  useEffect(() => {
    // This function loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    window.onYouTubeIframeAPIReady = function () {
      const player = new window.YT.Player('youtube-player', {
        videoId: videoId,
        width: '750',  // Set the initial width
        height: '400',
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    };

    // The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.mute();
      event.target.setVolume(10); // Set volume to 10 (out of 100)
      
      event.target.playVideo(); // Automatically play the video
    }

    function onPlayerStateChange(event) {
      // If the video is played by the user, unmute it
      if (event.data === window.YT.PlayerState.PLAYING) {
        event.target.unMute();
      }
    }

  }, [videoId]);



  return (
    <div className="App">
      {/* header stuff */} 
      <header className="App-header">
        <h1>
          Will Blog
        </h1>
      </header>
      {/* splits header and rest of page */} 
      <div className = "splitter">
        <hr className="header-hr" />
        <Sergeant />
      </div>
      {/* writing section */} 
      <div className= "writingNook">
        <div className='vertLine' style = {{left: '200px', top: '300px'}} > 
          <div className='stub' style = {{left: '-20px', top: '0px'}}> </div>
          <div className='stub'style = {{left: '-24px', top: '393px'}}> </div>
        </div>
        <div className='vertLine' style = {{left: '800px', top: '300px'}}> 
          <div className='stub' style = {{left: '-70px', top: '0px'}}> </div>
          <div className='stub'style = {{left: '-70px', top: '393px'}}> </div>
        </div>
        <Monkey />
        <h1 style = {{position: 'absolute', top: '300px', left: '100px'}}>
          Some <br/> Writing...
        </h1>
      </div>
      {/* video theatre */} 
      <div className = "videoTheatre">
        <h1 className='leftBrack' >
          {'{'}
        </h1>
        <h1 className = 'rightBrack'>
          {'}'}
        </h1>
        <hr className="theatre-hr" style={{top: '-1810px'}}/>
        <hr className="theatre-hr" style={{top: '-1441px'}}/>
        <hr className="animeLedge" />
        <div className="video-container">
          <div id="youtube-player"></div>
      </div>
      </div>
      <AnimeGirl />
    </div>
  );
}

export default App;
