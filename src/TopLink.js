import React, { Component } from 'react';
import './App.css';

class TopLink extends Component {
    render() {
        return (
            <a href={this.props.url}> 
                <div class="App-link"> {this.props.text} </div> 
            </a>
        );
    }
}

export default TopLink;