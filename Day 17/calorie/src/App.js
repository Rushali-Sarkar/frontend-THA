import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CalorieCard} from "./components/CalorieCard";

let food_to_calories = [{"food": "Pizza", "calories": "56"}, {"food": "Burger", "calories": "69"}, {"food": "Coke", "calories": "500"}, {"food": "Brownie", "calories": "180"}, {"food": "Fried Rice", "calories": "180"}, {"food": "Lasagna", "calories": "200"}, {"food": "Pani Puri", "calories": "10"}];
let list_items = food_to_calories.map(item => <CalorieCard food={item.food} calories={item.calories}/>);

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <h1>Calorie Read Only</h1>
          <div className="list-items">{list_items}</div>
        </div>
      </div>
    );
  }
}

export default App;
