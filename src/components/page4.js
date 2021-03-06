import React, { Component } from "react";
import "./page4.css";
import normal from "../images/normalSeat.png";
import honeymoon from "../images/honeymoon.png";
import normalSelected from "../images/normalLight.png";
import honeymoonSelected from "../images/honeymoonLight.png";

export default class Page4 extends Component {
	render() {
		return (
			<div className="page4">
				<div
					className={this.props.seat == "Normal" ? "selected" : ""}
					onClick={() => this.props.kept("seat", "Normal", true)}
					onMouseEnter={() => {
						window.highlightPart(this.props.currentState, "Normal", false,this.props.toggle);
					}}
					onMouseLeave={() => {
						window.highlightPart(this.props.currentState, "Normal", true,this.props.toggle);
					}}
				>
					<img className="seat" src={normal} />
					<img className="seatSelected" src={normalSelected} />
					<p>Normal Seat</p>
					<div />
				</div>
				<div
					className={this.props.seat == "Honeymoon" ? "selected" : ""}
					onClick={() => this.props.kept("seat", "Honeymoon", true)}
					onMouseEnter={() => {
						window.highlightPart(this.props.currentState, "Honeymoon", false,this.props.toggle);
					}}
					onMouseLeave={() => {
						window.highlightPart(this.props.currentState, "Honeymoon", true,this.props.toggle);
					}}
				>
					<img className="seat" src={honeymoon} />
					<img className="seatSelected" src={honeymoonSelected} />
					<p>Honeymoon Seat</p>
					<div />
				</div>
			</div>
		);
	}
}
