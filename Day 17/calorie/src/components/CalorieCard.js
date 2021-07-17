import React, {Component} from 'react';
import './CalorieCard.css';

export class CalorieCard extends Component {
	render() {
			return (
				<div className="calorie-card">
					<div className="food-item">{this.props.food}</div>
					<div className="calories">You have consumed {this.props.calories} calories today</div>
				</div>
			);
		}
}