import React, { Component } from 'react';
import './ChessLines.css';

export class ChessLines extends Component {
	render() {
		return (
			<div className="chess-lines">
				<div className="odd-line">
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
				</div>
				<div className="even-line">
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
					<span className="white"></span>
					<span className="black"></span>
				</div>
			</div>
		);
	}
}