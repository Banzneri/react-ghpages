import React, { Component } from 'react';
import logo from './logo.svg';
import pasi from './riippumatto.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pasi} className="App-riippumatto" alt="logo" />
          <h1 className="App-title">Pasi Hanhijärvi</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
