import React, { Component } from 'react';
import './App.css';
import githublogo from './github.png';

class Gameproject extends Component {
  render() {
    return (
      <div className="App-gameproject">
        <h2> {this.props.name} </h2>
        <div className="App-videoSmall">
          <iframe src={this.props.videoUrl} width="560" height="349" frameBorder="0" allowFullScreen></iframe>
        </div>
        <a href={this.props.repo}>
          <img src={githublogo} className="App-githublogo" alt=""/>
        </a>
      </div>
    );
  }
}

export default Gameproject;