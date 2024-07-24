
import '../App.css';
import Sergeant from '../components/Sergeant';
import Monkey from '../components/Monkey';
import AnimeGirl from '../components/AnimeGirl';
import YouTubePlayer from '../components/YouTubePlayer';
import React, { useState, useEffect } from 'react';
import { useParams, BrowserRouter as Router, Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import Brack from '../assets/images/segoebrack.png';

const API_KEY = process.env.YTAPI_KEY;

const CHANNEL_ID = 'UCExiOkMqwQjyMxE-n_qQUsg';

const videoIds = ['kK9kjg2tprA&t=5s', 'Q6b4VK5NIiY&t=205s', 'TGuFD_NN8ec', 
  'YML-Jfw2GjU&t=82s', 'lkb_RqEIUsw', 'JUhT8K5q0yM', 'E6MFArEkeLw', 'elp66up3wRo&t=1s', 'tSIQThHrNIE', 'vbmayOslHvs&t=1s'
, 'pJgK7ZFs6-k', 'U9FjlN3F7Zk', 'TL8ZDoOyIJA&t=164s', 'lESAs7sq9UI&t=42s', 'EjfTqzv7glo'];



const Home = ( {articles} ) => {



  /*VIDEO ID STUFF */ 


  const [randomVideoId, setRandomVideoId] = useState('');

  
  useEffect(() => {
    const getRandomVideoId = (videoIds) => {
      const randomIndex = Math.floor(Math.random() * videoIds.length);
      return videoIds[randomIndex];
    };

    if (videoIds.length > 0) {
      console.log('if statement triggered');
      setRandomVideoId(getRandomVideoId(videoIds));
    }
    console.log(videoIds);
    console.log(randomVideoId);
  }, []);


  
  

  
  /* END YOUTUBE STUFF */


  const navigate = useNavigate();

  const handleInvisibleButtonClick = (e) => {
    // Prevent click propagation to other elements
    e.stopPropagation();
    navigate('/login');
  };

  //video player things

  

  

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
          
          {randomVideoId && <YouTubePlayer videoId= {randomVideoId} isMuted={isMuted}/>  }
          
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
