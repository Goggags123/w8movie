import React, { useState } from "react";
import { Link } from "react-router-dom";
import Credit from "../containers/Credit";
import logo from "../images/logo.svg";
import "./Navbar.css";

export default function Navbar() {
	let [isShown, show] = useState(false);
	return (
		<div className="navbar">
			<Link
				to="/"
				style={{
					display: "flex",
					textDecoration: "none",
					width: "max-content",
				}}
			>
				<img src={logo} className="logo" />
				<p className="title">
					<b>W</b>8Movie
				</p>
			</Link>
			<div
				className="credit"
				onClick={() => {
					const credit = document.getElementById("credit");
					if (credit) {
						if (isShown) credit.className = "hidden";
						else credit.className = "shown";
					}
					show(!isShown);
				}}
			>
				Members
				<div style={{marginLeft:"10%"}}>
					<svg
						width="12"
						height="12"
						viewBox="0 0 15 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={isShown?{transform:"rotate(180deg)"} : null}
					>
						<path
							d="M7.5 12L0.138783 0.750001L14.8612 0.750002L7.5 12Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
			<Credit isShown={isShown} show={show} />
		</div>
	);
}
