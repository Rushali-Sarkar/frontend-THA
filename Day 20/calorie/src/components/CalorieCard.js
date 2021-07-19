import React, {Component} from 'react';
import './CalorieCard.css';

export class CalorieCard extends Component {
	render() {
			return (
				<div className="calorie-card" id={this.props.id}>
				<li>
					<div className="food-item">{this.props.food}</div>
					<div className="calories">You have consumed {this.props.calories} calories today</div>
					<button className="delete-button" onClick={this.props.delete_item}>Delete</button>
					</li>
				</div>
			);
		}
}