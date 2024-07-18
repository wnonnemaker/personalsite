
import '../App.css';
import Sergeant from '../components/Sergeant';
import Monkey from '../components/Monkey';
import AnimeGirl from '../components/AnimeGirl';
import YouTubePlayer from '../components/YouTubePlayer';
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

  const YTAPIKEY = process.env.YTAPI_KEY;

  const videoId = 'tSIQThHrNIE?si=Sjm4wMMjJ7Wf8lDw';

  

  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
          
          <YouTubePlayer videoId= 'tSIQThHrNIE?si=Sjm4wMMjJ7Wf8lDw' isMuted={isMuted}/>  
          
        </div>
          
          <button onClick={toggleMute} className={`unmute-button ${isMuted ? 'on' : 'off'}`}>
          {isMuted ? 'Unmute' : 'Mute'}
          </button>
          
          
      </div>
      <AnimeGirl />
    </div>
  );
}

export default Home;
