import React, { Component } from 'react';
import './App.css';
import {ChessLines} from "./components/ChessLines"

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="chess-box">
          <ChessLines/>
          <ChessLines/>
          <ChessLines/>
          <ChessLines/>
        </div>
      </div>
    );
  }
}

export default App;
