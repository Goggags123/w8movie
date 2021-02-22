import React, { Fragment } from "react";

import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

import "../App.css";
function initDiagram() {
	const $ = go.GraphObject.make;
	// set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
	const diagram = $(go.Diagram, {
		"undoManager.isEnabled": true, // must be set to allow for model change listening
		// 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
		"clickCreatingTool.archetypeNodeData": {
			text: "new node",
			color: "lightblue",
		},
		model: $(go.GraphLinksModel, {
			linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
		}),
	});

	// define a simple Node template
	diagram.nodeTemplate = $(
		go.Node,
		"Auto",
		new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
			go.Point.stringify
		),
		$(
			go.Shape,
			"Circle",
			{ name: "SHAPE", fill: "white", strokeWidth: 0, width: 70, height: 70 },
			// Shape.fill is bound to Node.data.color
			new go.Binding("fill", "color")
		),
		$(
			go.TextBlock, // some room around the text
			new go.Binding("text", "key").makeTwoWay()
		)
	);

	diagram.linkTemplate = $(
		go.Link,
		{ curve: go.Link.Bezier },
		$(go.Shape),
		$(go.Shape, { toArrow: "Standard" }),
		$(
			go.TextBlock,
			{
				segmentOffset: new go.Point(0, -10),
				segmentOrientation: go.Link.OrientUpright,
			},
			new go.Binding("text", "label")
		)
	);

	return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */

function DFA() {
	let column1_position = -100;
	let BeautyAndTheBeast = "BeautyAndTheBeast";
	let Hackers = "Hackers";
	let HarryPotter = "HarryPotter";
	return (
		<Fragment>
			<ReactDiagram
				initDiagram={initDiagram}
				divClassName="diagram-component"
				nodeDataArray={[
					{ key: "Start", color: "lightblue", loc: "0 0" },
					{ key: "Confirm", color: "orange", loc: "0 50" },
					{ key: Hackers, color: "lightgreen", loc: `200 ${column1_position}` },
					{
						key: BeautyAndTheBeast,
						color: "lightgreen",
						loc: `200 ${column1_position + 100}`,
					},
					{
						key: HarryPotter,
						color: "lightgreen",
						loc: `200 ${column1_position + 200}`,
					},
					{
						key: "d",
						color: "lightgreen",
						loc: `200 ${column1_position + 300}`,
					},
					{ key: "Popcorn", color: "pink", loc: "150 150" },
					{ key: "Drinks", color: "pink", loc: "150 150" },
				]}
				linkDataArray={[
					{ from: "Start", to: "Start", label: "Start" },
					{ from: "Start", to: Hackers, label: Hackers },
					{ from: "Start", to: BeautyAndTheBeast, label: BeautyAndTheBeast },
					{ from: Hackers, to: BeautyAndTheBeast, label: BeautyAndTheBeast },
					{ from: Hackers, to: Hackers, label: Hackers },
					{ from: BeautyAndTheBeast, to: Hackers, label: Hackers },
					{
						from: BeautyAndTheBeast,
						to: BeautyAndTheBeast,
						label: BeautyAndTheBeast,
					},
					{
						from: BeautyAndTheBeast,
						to: BeautyAndTheBeast,
						label: BeautyAndTheBeast,
					},
				]}
			/>
			<div className="group">
				<i className="fa fa-plus fa-fw zoom" cal></i>
                <hr></hr>
				<i className="fa fa-minus fa-fw zoom"></i>
			</div>
		</Fragment>
	);
}

export default DFA;
