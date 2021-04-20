import "./App.css";
import Main from "./containers/Main.js";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ellipse from "./components/Ellipse";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
function App() {
	let [isLoading, setLoading] = useState(true);
	return (
		<div className="body">
			<Ellipse className="ellipse1" />
			<Ellipse className="ellipse2" />
			<Ellipse className="ellipse3" />
			<Router>
				<Switch>
					<Route path="/" exact>
						{isLoading ? <Loading /> : <Navbar />}
						<Main isLoading={isLoading} setLoading={setLoading} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

// import React, { useEffect, useRef, useState } from 'react';
// import "./test.css";

// const generateMessage = () => {
//   const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
//   const text = [];
//   let x = 7;
//   while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
//   return text.join(" ");
// }

// function App() {

//   const messageEl = useRef(null);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (messageEl) {
//       messageEl.current.addEventListener('DOMNodeInserted', event => {
//         const { currentTarget: target } = event;
//         target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
//       });
//     }
//   }, [])

//   useEffect(() => {
//     const generateDummyMessage = () => {
//       setInterval(() => {
//         setMessages(prevMsg => [...prevMsg, generateMessage()]);
//       }, 2000);
//     }
//     generateDummyMessage();
//   }, []);

//   return (

//     <div className="App">
//       <h3>Auto scroll to bottom in react chat app - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h3>
//       <div className="chat">
//         <div className="head">ChatBot</div>
//         <div className="messages" ref={messageEl}>
//           {messages.map((m, i) => <div key={i} className={`msg${i % 2 !== 0 ? ' dark' : ''}`}>{m}</div>)}
//         </div>
//         <div className="footer">
//           <input type="text" placeholder="Type here..." />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;