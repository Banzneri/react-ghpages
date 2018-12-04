import React, { Component } from 'react';
import pasi from './riippumattokapea.png';
import './App.css';
import './Gameproject.js';
import Gameproject from './Gameproject.js';
import TopLink from './TopLink.js';
import Text from './Text.js';
import {Line} from './Line.js';

const about = 'A software development guru in the making.';
const about2 = 'Currently Studying Business Information Systems in Tampere University of Applied Sciences, specializing in Software Development. ' +  
              'Interested in a wide variety of technologies, software and game development for both mobile and desktop, with an emphasis on Java and C#/Unity development. ';
const arcadeVideo = "https://www.youtube.com/embed/h9wl4sYZWZU";
const githubAddress = "https://github.com/Banzneri";

class App extends Component {
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
            <div id="about"></div>
        </div>
        <div className="App-textarea">
          <Text file ={about}></Text>
          <Line width="30%"></Line>
          <Text file = {about2}></Text>
          <Line width="30%"></Line>
          <div className="App-titleSection">
            <div id="projects"></div>
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
          <Gameproject name="Misc projects" videoUrl="" 
                        repo=""/>
        </div>
        <Line width="90%"></Line>
        <footer className="App-footer">
              <a href="mailto:pasi.hanhijarvi@gmail.com"><p>pasi.hanhijarvi@gmail.com</p></a>
              <a href={githubAddress} target="_blank"><p>{githubAddress}</p></a>
        </footer>
      </div>
    );
  }
}

export default App;
