import React, { Component } from 'react';
import './App.css';

class TopLink extends Component {
    render() {
        return (
            <a href={this.props.url}> <div className="App-link App-regulartext"> {this.props.text} </div> </a>
        );
    }
}

export default TopLink;