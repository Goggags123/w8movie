import React, { Fragment, useState } from "react";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
export default function Main() {
	let [input, setInput] = useState([]);
	let [output, setOutput] = useState("");
	let [toggle, setToggle] = useState(true);
	let [isLoading, setLoading] = useState(true);
	let [currentState, setState] = useState(0);

	let str={input};
	return (
		<Fragment>
			<div className="body">
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
			{/* {isLoading ? <Loading /> : null} */}
			<Navbar />
			<div className="allContainer">
			{/* <div className="layout"> */}
				<div className="dfa">
					{/* <p className="text">Output</p> */}
					{/* <div className="container">{output}</div> */}
					<DFA
						className="theDFA"
						currentState={currentState}
						setLoading={setLoading}
						setState={setState}
						toggle={toggle}
						setToggle={setToggle}
					/>	
							
					<div className="container">
						<p>{"Input : "}</p>
						<div className="text">
							<div className="allInput">
						{input.map((input, i) => {
            				return (
								<div className="inputComponent" style={input=="Thai dub"?{width:"4em"}:input=="Add-on"?{width:"3.2em"}:{}}>{input}</div>
							);})}
							</div>
						</div>
					</div>
				</div>
			{/* </div> */}
				<Movie 
						setInput={setInput}
						input={input}
						setState={setState}
						setOutput={setOutput}
						currentState={currentState}
						toggle={toggle}
				/>
			</div>
				
			</div>
		</Fragment>
	);
}
