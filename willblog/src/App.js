import logo from './logo.svg';
import './App.css';
import Sergeant from './components/Sergeant';
import Monkey from './components/Monkey';



function App() {
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
        <h1 style = {{}}>
          {'{'}
        </h1>
        <h1 style = {{font : '' , fontSize: ''}}>
          {'}'}
        </h1>
      </div>
    </div>
  );
}

export default App;
