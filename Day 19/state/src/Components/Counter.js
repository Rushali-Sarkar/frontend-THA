import React, { Component } from 'react';
import './Counter.css';

export class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}

	increment = () => {
		this.setState({count: this.state.count + 1});
	}
	render() {
		return (
		<button onClick={this.increment} className="counter-button">{this.state.count}</button>
		);
	}
}