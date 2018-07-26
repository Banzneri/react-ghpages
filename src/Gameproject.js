import React, { Component } from 'react';
import './App.css';

class Gameproject extends Component {
  render() {
    return (
      <div className="App-gameproject">
        <p>
          {this.props.name}
        </p>
        <img src={this.props.imgurl} alt="noimage" className="App-gameimage"/>
      </div>
    );
  }
}

export default Gameproject;