import React, { Fragment, useState } from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
export default function Main() {
	let [input, setInput] = useState("");
	let [output, setOutput] = useState("");
	let [isLoading, setLoading] = useState(true);
	let [currentState, setState] = useState(0);
	return (
		<Fragment>
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
			{/* {isLoading ? <Loading /> : null} */}
			<Navbar />
			<div className="layout">
				<div className="dfa">
					<p className="text">Output</p>
					<div className="container">{output}</div>
					<DFA
						currentState={currentState}
						setLoading={setLoading}
						setState={setState}
					/>
					<p className="text">Input</p>
					<div className="container">{input}</div>
				</div>
				<div style={{ margin: "1% 1% 0 0" }}>
					<Movie
						setInput={setInput}
						setState={setState}
						setOutput={setOutput}
						currentState={currentState}
					/>
				</div>
			</div>
		</Fragment>
	);
}
