import React, { Component } from 'react';
import './App.css';
import {CalorieCard} from "./components/CalorieCard";

class App extends Component {

  state = {
    food_to_calories : [
      {food: "Pizza", calories: "56", body: 1}, 
      {food: "Burger", calories: "69", id: 2}, 
      {food: "Coke", calories: "500", id: 3}, 
      {food: "Brownie", calories: "180", id: 4}, 
      {food: "Fried Rice", calories: "180", id: 5}, 
      {food: "Lasagna", calories: "200", id: 6}, 
      {food: "Pani Puri", calories: "10", id: 7}
    ]
  }

  deleteEvent = (index)=> {
    let copy_food_to_calories = Object.assign([], this.state.food_to_calories);
    copy_food_to_calories.splice(index, 1);
    this.setState({
      food_to_calories: copy_food_to_calories
    })
  }

  render() {
    let length = this.state.food_to_calories.length;
    if (length === 0) {
      return (
      <div className="main">
        <div className="container">
          <h1>Calorie Read Only</h1>
          <div className="list-items">
          <ul className="listing">
              <h1>There is nothing in the list to show</h1>
            </ul>
          </div>
        </div>
      </div>
    );
    }
    else {
    return (
      <div className="main">
        <div className="container">
          <h1>Calorie Read Only</h1>
          <div className="list-items">
          <ul className="listing">
              {
                this.state.food_to_calories.map((item, index)=>{
                  return (
                  <CalorieCard
                    food={item.food}
                    calories={item.calories}
                    id={item.id}
                    delete_item={this.deleteEvent.bind(this, index)}
                  />
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
  }
}

export default App;
