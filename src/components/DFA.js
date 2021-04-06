import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

import React, { Fragment, useEffect, useState } from "react";
import "./DFA.css";
import { createBurst, freeArray } from "./Geonometry";

function initDiagram() {
	const $ = go.GraphObject.make;
	// set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
	const diagram = $(
		go.Diagram,
		{
			"undoManager.isEnabled": true, // must be set to allow for model change listening
			// 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
			"clickCreatingTool.archetypeNodeData": {
				text: "new node",
				color: "lightblue",
			},

			model: $(go.GraphLinksModel, {
				linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
			}),
		},
		{
			layout: $(go.TreeLayout, {
				angle: 0,
				nodeSpacing: 100,
				layerSpacing: 200,
			}),
		}
	);
	go.Shape.defineFigureGenerator("TenPointedBurst", function (shape, w, h) {
		var burstPoints = createBurst(10);
		var geo = new go.Geometry();
		var fig = new go.PathFigure(
			burstPoints[0].x * w,
			burstPoints[0].y * h,
			true
		);
		geo.add(fig);

		for (var i = 1; i < burstPoints.length; i += 3) {
			fig.add(
				new go.PathSegment(
					go.PathSegment.Bezier,
					burstPoints[i + 2].x * w,
					burstPoints[i + 2].y * h,
					burstPoints[i].x * w,
					burstPoints[i].y * h,
					burstPoints[i + 1].x * w,
					burstPoints[i + 1].y * h
				)
			);
		}
		fig.segments.last().close();
		freeArray(burstPoints);
		geo.spot1 = new go.Spot(0.222, 0.222);
		geo.spot2 = new go.Spot(0.777, 0.777);
		return geo;
	});
	// define a simple Node template
	diagram.nodeTemplate = $(
		go.Node,
		"Auto",
		new go.Binding("location", "loc", go.Point.parse),
		$(
			go.Shape,
			"Circle",
			{
				fill: "#A64568",
				stroke: "white",
				strokeWidth: 3,
				width: 70,
				height: 70,
			},
			new go.Binding("fill", "color")
		),
		$(
			go.TextBlock,
			{
				stroke: "white",
				font: "Normal 0.75rem Roboto",
				textAlign: "center",
			},
			new go.Binding("text", "key").makeTwoWay()
		)
	);

	diagram.linkTemplate = $(
		go.Link,
		{ routing: go.Link.Orthogonal, curve: go.Link.JumpOver, corner: 10 },
		new go.Binding("routing", "routing"),
		$(go.Shape, { stroke: "white", strokeWidth: 3 }),
		$(go.Shape, { toArrow: "OpenTriangle", stroke: "white", strokeWidth: 3 }),
		$(go.Shape, "TenPointedBurst", {
			name: "GLOW",
			fill: "transparent",
			strokeWidth: 0,
			width: 12,
			height: 12,
		}),
		new go.Binding("fromSpot", "fromSpot", go.Spot.parse),
		new go.Binding("toSpot", "toSpot", go.Spot.parse),
		$(
			go.TextBlock,
			{
				font: "Normal 0.75rem Roboto",
				stroke: "white",
				segmentIndex: -2,
				segmentFraction: 0.5,
				segmentOffset: new go.Point(0, -10),
				shadowVisible: false,
			},
			new go.Binding("segmentOffset", "offset"),
			new go.Binding("text", "label")
		)
	);
	go.AnimationManager.defineAnimationEffect(
		"fraction",
		function (
			obj,
			startValue,
			endValue,
			easing,
			currentTime,
			duration,
			animation
		) {
			obj.segmentIndex = NaN;
			obj.segmentFraction = easing(
				currentTime,
				startValue,
				endValue - startValue,
				duration
			);
		}
	);
	// window.save = (setModel) => {
	// 	console.log("model:", diagram.model.toJson());
	// 	setModel(diagram.model.toJson());
	// 	diagram.isModified = false;
	// };
	// window.load = (model) => {
	// 	diagram.model = go.Model.fromJson(model);
	// };
	window.animateColorAndFraction = (currentState) => {
		var animation = new go.Animation();
		diagram.links.each(function (link) {
			link.isShadowed = true;
			link.shadowColor = "white";
			// link.shadowBlur = ;
			link.shadowOffset = new go.Point(0, 0);
			const glow = link.findObject("GLOW");
			glow.fill = "transparent";
			glow.shadowVisible = false;
			if (link.data.from != currentState) return;
			glow.fill = "white";
			glow.shadowVisible = true;
			animation.add(glow, "fraction", 0, 1);
			animation.duration = 3000;
			animation.runCount = Infinity; // Animate forever
			animation.start();
		});
	};
	// window.showPath = (toggle) => {
	// 	if (toggle) {
	// 		window.save();
	// 	} else {
	// 		window.load();
	// 	}
	// };
	return diagram;
}

function DFA({ currentState }) {
	let [model, setModel] = useState({});
	// let [path,setModel] = useState({});
	const topRight = "0.85 0.15";
	const topLeft = "0.15 0.15";
	const f = (a, b) =>
		[].concat(...a.map((a) => b.map((b) => a.concat("\n", b))));
	const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
	const makeColumn = (column, isStart = false) => {
		let node = [],
			self = [],
			link = [];
		for (let i = 0; i < column.length; i++) {
			node.push({
				key: column[i],
			});
			const from = column[i].slice(0, column[i].lastIndexOf("\n"));
			const split = column[i].split("\n");
			const to = split[split.length - 1];
			link.push(
				isStart
					? {
							from: "Start",
							to: column[i],
							label: column[i],
							fromSpot: "Right",
							toSpot: "Left",
					  }
					: {
							from: from,
							to: column[i],
							label: to,
							fromSpot: "Right",
							toSpot: "Left",
					  }
			);
			self.push({
				from: column[i],
				to: column[i],
				label: isStart ? column[i] : to,
				routing: "curve",
				fromSpot: topRight,
				toSpot: topLeft,
				offset: new go.Point(0, 5),
			});
		}
		return {
			node,
			self,
			link,
		};
	};
	const movies = ["Hackers", "Beauty", "Harry", "Assasin", "Parasite"];
	const showTime = ["12:00", "14:20", "16:40"];
	const seat = ["Normal", "Honeymoon"];
	const soundSystem = ["Thai", "English"];
	const addOn = ["Popcorn", "Drinks", "Both"];
	let column1 = movies;
	let column2 = cartesian(movies, showTime);
	let column3 = cartesian(column2, seat);
	let column4 = cartesian(column3, soundSystem);
	let column5 = cartesian(column4, addOn);
	column1 = makeColumn(column1, true);
	column2 = makeColumn(column2);
	column3 = makeColumn(column3);
	column4 = makeColumn(column4);
	column5 = makeColumn(column5);
	return (
		<Fragment>
			<ReactDiagram
				initDiagram={initDiagram}
				divClassName="diagram-component"
				nodeDataArray={[
					{
						key: "Start",
						color: "#FF6C00",
						loc: "0 0",
					},
					...column1.node,
					...column2.node,
					// ...column3.node,
					// ...column4.node,
					// ...column5.node,
					// { key: "Confirm", color: "#FF6C00", loc: "0 50" },
				]}
				linkDataArray={[
					...column1.link,
					...column2.link,
					...column3.link,
					...column4.link,
					...column5.link,
					...column1.self,
					...column2.self,
					...column3.self,
					...column4.self,
					...column5.self,
				]}
			/>
			<div className="group">
				<i
					className="fa fa-plus fa-fw zoom"
					onClick={() => {
						// window.initGlowing(currentState);
						window.animateColorAndFraction(currentState);
						// window.save(setModel);
					}}
				></i>
				<hr></hr>
				<i
					className="fa fa-minus fa-fw zoom"
					onClick={() => {
						window.togglePath(true);
						// console.log(model);
					}}
				></i>
			</div>
		</Fragment>
	);
}

export default DFA;
