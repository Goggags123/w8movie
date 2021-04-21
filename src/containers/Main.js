import React, { useEffect, useState } from "react";
import DFA from "../components/DFA";
import Movie from "../components/Movie";
export default function Main({ isLoading, setLoading }) {
	let [input, setInput] = useState([]); //input
	let [toggle, setToggle] = useState(true); //whether the showPath is active or not
	let [currentState, setState] = useState(0); //dfa state
	useEffect(() => {
		var lastInput = document.getElementById("input");
		if (lastInput)
			lastInput.scroll({ left: lastInput.scrollWidth, behavior: "smooth" });
	}, [input]);
	return (
		<div className="allContainer">
			<div className="dfa">
				<div className="container">
					<p>{"Input : "}</p>
					<div className="text" id="input">
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
