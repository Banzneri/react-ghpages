import React, { Component } from 'react';
import logo from './logo.svg';
import pasi from './riippumattokapea.png';
import './App.css';
import './Gameproject.js';
import Gameproject from './Gameproject.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Pasi Hanhijärvi
          </p>
          <div class="App-links">
            <a href="">
              <div class="App-link">
                PASKAA
              </div>
            </a>
            <a href="">
              <div class="App-link">
                PASKAA
              </div>
            </a>
            <a href="">
              <div class="App-link">
                PASKAA
              </div>
            </a>
          </div>
        </header>
        <img src={pasi} className="App-riippumatto" alt="logo" />
        <h1 className="App-title">Pasi Hanhijärvi</h1>
        <p className="App-intro">
        </p>
        <Gameproject name="Super Sprocket" imgurl="./test.jpg"/>
        <Gameproject name="Arcade Madness" imgurl="./test.jpg"/>
      </div>
    );
  }
}

export default App;
