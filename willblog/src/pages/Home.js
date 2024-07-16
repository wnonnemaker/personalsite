
import '../App.css';
import Sergeant from '../components/Sergeant';
import Monkey from '../components/Monkey';
import AnimeGirl from '../components/AnimeGirl';
import React, { useState, useEffect } from 'react';
import { useParams, BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Brack from '../assets/images/segoebrack.png';


const Home = ( {articles} ) => {
  const navigate = useNavigate();

  const handleInvisibleButtonClick = (e) => {
    // Prevent click propagation to other elements
    e.stopPropagation();
    navigate('/login');
  };

  //video player things

  

  const videoId = 'tSIQThHrNIE?si=Sjm4wMMjJ7Wf8lDw';

  useEffect(() => {
    // Load the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create an <iframe> (and YouTube player) after the API code downloads.
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

      function onPlayerReady(event) {
        // Store the player instance for later use
        window.player = player;
        window.player.playVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data === window.YT.PlayerState.PLAYING) {
          console.log('Video is playing');
        }
      }
    };
  }, [videoId]);

  const handlePlayButtonClick = () => {
    console.log('click happened');
    if (window.player) {
      window.player.playVideo();
    }
  };

  


  //These are article things



  //all the html stuff


  return (
    <div className="App">

          <nav>
          <ul>
            <li className='invisButton'>
              <Link to = "/login"> <button>login</button> </Link>
            </li>
          </ul>
          </nav>
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

      
        <nav>
          <ul>
            
            {articles.map(article => (
            <li className='articleList' key={article.id}>
                <Link to={`/article/${article.id}`}> {article.title} </Link>
            </li>
            ))}
          </ul>
          
        </nav>
      
      

      {/* video theatre */} 



      <div className = "videoTheatre">
        <h1 className='leftBrack' >
            <img src={Brack} alt="leftBracket" style={{ width: 'auto', height: '288px'}} />
        </h1>
        <h1 className = 'rightBrack'>
            <img src={Brack} alt="rightBracket" style={{ width: 'auto', height: '288px'}} />
        </h1>
        <hr className="theatre-hr" style={{top: '-1810px'}}/>
        <hr className="theatre-hr" style={{top: '-1441px'}}/>
        <hr className="animeLedge" />
        <div className="video-container">
          {/*<button className="btn btn-primary" onClick={handlePlayButtonClick}>Play Video</button>*/}
          <div id="youtube-player"></div>
      </div>
      </div>
      <AnimeGirl />
    </div>
  );
}

export default Home;
