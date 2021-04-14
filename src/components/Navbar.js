import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
	return (
		<div className="navbar">
			<img src={logo} className="logo" />
			<p className="title"><b>W</b>8Movie</p>
		</div>
	);
}
