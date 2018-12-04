import React, { Component } from 'react';
import './App.css';
import githublogo from './github.png';

class Gameproject extends Component {
  render() {
    return (
      <div className="App-gameproject">
        <a href={this.props.repo}><div className="App-title bold gamename">{this.props.name}</div></a>
        <div className="App-videoSmall">
          <iframe src={this.props.videoUrl} width="560" height="349" frameBorder="0" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default Gameproject;