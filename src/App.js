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
