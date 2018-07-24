import React, { Component } from 'react';
import logo from './logo.svg';
import pasi from './riippumattokapea.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={pasi} className="App-riippumatto" alt="logo" />
        </header>
        <h1 className="App-title">Pasi Hanhijärvi</h1>
        <p className="App-intro">
          
        </p>
      </div>
    );
  }
}

export default App;
