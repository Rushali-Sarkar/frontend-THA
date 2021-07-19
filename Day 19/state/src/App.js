import React, { Component } from 'react';
import {Counter} from "./Components/Counter";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>There are 4 counter component instances that each manage their own state.</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    );
  }
}

export default App;
