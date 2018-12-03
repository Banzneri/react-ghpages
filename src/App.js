import React, { Component } from 'react';
import pasi from './riippumattokapea.png';
import './App.css';
import './Gameproject.js';
import Gameproject from './Gameproject.js';
import TopLink from './TopLink.js';

class App extends Component {

  handleLinkCollapse() {

  }
  render() {
    return (
      
      <div className="App">
        <header className="App-header" id="myHeader">
          <p> Pasi Hanhijärvi </p>
          <div className="App-navbar-large">
          <TopLink text="Github" url="https://github.com/Banzneri" />
            <TopLink text="About" url="#about" />
            <TopLink text="Projects" url="#projects" />
          </div>
        </header>
        <div className="App-navbar-small">
            <TopLink text="Github" url="https://github.com/Banzneri" />
            <TopLink text="About" url="#about" />
            <TopLink text="Projects" url="#projects" />
        </div>
        <img src={pasi} className="App-riippumatto" alt="logo" />
        <div className="App-titleSection" id="about">
          <h1>About me</h1>
        </div>
        <div className="App-textSection">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="App-titleSection" id="projects">
          <h1>My projects</h1>
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
        
      </div>
    );
  }
}

export default App;
