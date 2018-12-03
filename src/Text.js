import React, { Component } from 'react';
import './App.css';

class Text extends Component {   

    render() {
        return (
            <div className="App-textSection">
                <p className="App-regulartext">
                    {this.props.file}
                </p>
            </div>
        );
    }
}

export default Text;