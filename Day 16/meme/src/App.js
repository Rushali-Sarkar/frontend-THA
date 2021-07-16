import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import meme from './meme.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "card">
      <Card className = "card-frame">
      <Card.Img variant="top" src={meme}/>
      <Card.Body>
        <Card.Title>React Card</Card.Title>
        <Card.Text>
          Just made the react card
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    );
  }
}

export default App;
