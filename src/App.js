import React, { Component } from 'react';
import pasi from './riippumattokapea.png';
import './App.css';
import './Gameproject.js';
import Gameproject from './Gameproject.js';
import TopLink from './TopLink.js';
import Text from './Text.js';

const about = 'A passionate software development guru in the making.';
const about2 = 'Currently Studying Business Information Systems in the Tampere University of Applied Sciences, specializing in Software Development. ' +  
              'Interested in new and old technologies, software and game development. Mostly with Java and C#.'
const arcadeVideo = "https://www.youtube.com/embed/h9wl4sYZWZU";
const githubAddress = "https://github.com/Banzneri";

class App extends Component {

  handleLinkCollapse() {

  }
  render() {
    return (
      
      <div className="App">
        <header className="App-header" id="myHeader">
          <p className="App-title"> Pasi Hanhijärvi </p>
          <div className="App-navbar-large">
            <a href={githubAddress} target="_blank"> <div class="App-link"> Github </div> </a>
            <a href="#about"> <div class="App-link"> About </div> </a>
            <a href="#projects"> <div class="App-link"> Projects </div> </a>
          </div>
        </header>
        <img src={pasi} className="App-riippumatto-pieni" alt="logo"/>
        <div className="App-navbar-small">
            <a href={githubAddress} target="_blank"> <div class="App-link"> Github </div> </a>
            <a href="#about"> <div class="App-link"> About </div> </a>
            <a href="#projects"> <div class="App-link"> Projects </div> </a>
        </div>
        <div className="App-container">
            <div className="App-overlay"></div>
            <img src={pasi} className="App-riippumatto" alt="logo" />
        </div>
        <div className="App-textarea">
          <div id="about"></div>
          <Text file ={about}></Text>
          <div className="line"></div>
          <Text file = {about2}></Text>
          <div className="line"></div>
          <div className="App-titleSection" id="projects">
            <p className="App-title">Some of my work</p>
          </div>
        </div>
        <div className="App-gameprojects">
          <Gameproject name="Super Sprocket" videoUrl="https://www.youtube.com/embed/h9wl4sYZWZU" 
                        repo="https://github.com/HALPCat/KasaGame"/>
          <Gameproject name="Arcade Madness" videoUrl="https://www.youtube.com/embed/KJ4Hkh_kXTU"
                        repo="https://github.com/Banzneri/ArcadeMadness1"/>
          <Gameproject name="SpaceShooter5000" videoUrl="https://www.youtube.com/embed/EF6w4Eb64P4" 
                        repo="https://github.com/Banzneri/SpaceShooter5000"/>
          <Gameproject name="JavaFX" videoUrl="https://www.youtube.com/embed/6KR2lF-R8B4" 
                        repo="https://github.com/Banzneri/engine"/>
          <Gameproject name="Misc projects" videoUrl="https://www.youtube.com/embed/h9wl4sYZWZU" 
                        repo=""/>
        </div>
        <footer className="App-footer">
            <ul>
              <p>pasi.hanhijarvi@gmail.com</p>
            </ul>
            <ul>
              <a href={githubAddress} target="_blank"><p>{githubAddress}</p></a>
            </ul>
        </footer>
      </div>
    );
  }
}

export default App;
