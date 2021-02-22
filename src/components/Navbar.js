import { logDOM } from "@testing-library/react";
import React, { useLayoutEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import logo from "../images/logo.svg";

export default function Navbar() {
	return (
		<div className="navbar">
			<img src={logo} className="logo" />
			<p className="title"><b>W</b>8Movie</p>
		</div>
	);
}
