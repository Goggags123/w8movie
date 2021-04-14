import React from "react";
import Ellipse from "./Ellipse";
import "./Loading.css";

export default function Loading() {
	window.scrollTo(0, 0);
	document.getElementsByTagName("body")[0].style.overflowY = "hidden";
	return (
		<div className="loading body">
			<p>l</p>
			<p>o</p>
			<p>a</p>
			<p>d</p>
			<p>i</p>
			<p>n</p>
			<p>g</p>
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
		</div>
	);
}
