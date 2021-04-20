import React, { useEffect, useState } from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import resetImg from "../images/reset.png";
export default function Main({ isLoading, setLoading }) {
	let [input, setInput] = useState([]);
	let [toggle, setToggle] = useState(true);
	let [currentState, setState] = useState(0);
	useEffect(() => {		
		var lastInput = document.getElementById("input");
		if (lastInput) lastInput.scroll({left: lastInput.scrollWidth ,behavior: 'smooth' });
			{console.log(lastInput.scrollWidth)}
	}, [input]);
	return (
		<div className="allContainer">
			<div className="dfa">
				<div className="container">
					<p>{"Input : "}</p>
					<div className="text" id = "input">
						<div className="allInput">
							{input.map((a, i) => {
								return (
									<div
										className="inputComponent"
										key={i}
										style={
											a == "Thai dub"
												? { width: "4em" }
												: a == "Add-on"
												? { width: "3.2em" }
												: {}
										}
									>
										{a}
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<DFA
					className="theDFA"
					currentState={currentState}
					setLoading={setLoading}
					setState={setState}
					toggle={toggle}
					setToggle={setToggle}
				/>
			</div>
			<Movie
				setInput={setInput}
				input={input}
				setState={setState}
				currentState={currentState}
				toggle={toggle}
			/>
		</div>
	);

}