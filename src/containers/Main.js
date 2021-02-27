import React from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
export default function Main() {
	return (
		<div className="main">
			<Navbar />
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
			<div className="allContainer">
				<div className="layout">
					<div className="dfa">
						<p className="text">Output</p>
						<div className="container">dfsdf</div>
						<DFA />
						<p className="text">Input</p>
						<div className="container">dfsdf</div>
					</div>
					<Movie />
				</div>
			</div>
		</div>
	);
}
