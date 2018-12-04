import React, { Component } from 'react';
import './App.css';

class Title extends Component {   

    render() {
        return (
            <div className="App-textSection">
                <p>
                    {this.props.file}
                </p>
            </div>
        );
    }
}

export default Title;