import React, { Fragment, useEffect, useState } from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Loading from "../components/Loading";


export default function Main() {
	let [input, setInput] = useState([]);
	let [toggle, setToggle] = useState(true);
	let [isLoading, setLoading] = useState(true);
	let [currentState, setState] = useState(0);

	

	useEffect(() => {		
		var lastInput = document.getElementById("input");
		if (lastInput) lastInput.scroll({left: lastInput.scrollWidth ,behavior: 'smooth' });
			{console.log(lastInput.scrollWidth)}
	}, [input]);


	return (
		<Fragment>
			
			<div className="body">
				<Ellipse className="ellipse1" />
				<Ellipse className="ellipse2" />
				<Ellipse className="ellipse3" />
				{/* {isLoading ? <Loading /> : <Navbar />} */}
				<Navbar/>
				<div className="allContainer">
					<div className="dfa">
						<div className="container">
							<p>{"Input : "}</p>
							<div id="input" className="text">
								<div className="allInput">
									{input.map((a, i) => {
										return (
											<div
												// id={i == input.length - 1 ? "input" : null}
												// key={i}
												className="inputComponent"
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
			</div>
			
		</Fragment>
	);

}