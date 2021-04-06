import React from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
export default function Main() {
	return (
		<div>
			<Navbar />
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
			<div className="layout">
				<div className="dfa">
					<p className="text">Output</p>
					<div className="container">dfsdf</div>
					<DFA currentState="Start"/>
					<p className="text">Input</p>
					<div className="container">dfsdf</div>
				</div>
				<div style={{margin: "1% 1% 0 0"}}>
					<Movie />
				</div>
			</div>
		</div>
	);
}
