import React, { Component } from 'react';
import './App.css';

class Gameproject extends Component {
  render() {
    return (
      <div className="gameproject">
        <p>
          {this.props.name}
        </p>
        <img src={this.props.imgurl} alt={this.props.name}/>
      </div>
    );
  }
}

export default Gameproject;