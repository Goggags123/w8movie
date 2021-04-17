import React, { useState, Fragment } from "react";

import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import "./DFA.css";
import { createBurst, freeArray } from "../utils/Geonometry";
import zoomIn from "../images/zoom-in.png";
import zoomOut from "../images/zoom-out.png";
import reset from "../images/reset-zoom.png";
import {nodeDataArray,linkDataArray} from "../utils/DiagramData";

function initDiagram() {
	const $ = go.GraphObject.make;
	// set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
	const diagram = $(
		go.Diagram,
		{
			// isReadOnly:true,
			model: $(go.GraphLinksModel, {
				linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
			}),
		},
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
				desiredSize: new go.Size(70,70),
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
			new go.Binding("text", "text").makeTwoWay()
		)
	);
	diagram.linkTemplate = $(
		go.Link,
		new go.Binding("fromSpot", "fromSpot", go.Spot.parse),
		new go.Binding("toSpot", "toSpot", go.Spot.parse),
		{ routing: go.Link.AvoidsNodes, corner: 10,adjusting:go.Link.Scale},
		new go.Binding("routing"),
		new go.Binding("fromEndSegmentLength"),
		new go.Binding("toEndSegmentLength"),
		$(go.Shape, { stroke: "white", strokeWidth: 2 }),
		$(go.Shape, { toArrow: "OpenTriangle", stroke: "white", strokeWidth: 2 }),
		$(go.Shape, "TenPointedBurst", {
			name: "GLOW",
			fill: "transparent",
			strokeWidth: 0,
			width: 12,
			height: 12,
		}),
		$(
			go.TextBlock,
			{
				font: "Normal 0.75rem Roboto",
				stroke: "white",
				segmentIndex: -2,
				segmentFraction: 0.5,
				segmentOffset: new go.Point(0, -10),
				shadowVisible: false,
				textAlign: "center",
			},
			new go.Binding("segmentIndex"),
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
	window.zoom = (isZoomedIn) => {
		if (isZoomedIn) {
			diagram.scale += 0.1;
		} else {
			diagram.scale -= 0.1;
		}
	};
	window.animateZoom = () => {
		var animation = new go.Animation();
		animation.add(diagram, "scale", diagram.scale, 1);
		animation.start();
	};
	window.showPath = (toggle,currentState) => {
		if (toggle) {
			diagram.links.each(function (link) {
				console.log(link.data)
				if (link.data.from != currentState) {
					link.opacity = 0;
					return;}
				link.opacity = 1;
			});

		} else {
			diagram.links.each(function (link) {
				link.opacity = 1;
			});
		}
	};
	var count = 0;
	diagram.addDiagramListener("InitialLayoutCompleted", () => {
		if (count == 1) {
			window.scrollTo(0, 0);
			document.getElementsByTagName("body")[0].style.overflowY = "visible";
			document.getElementsByTagName("body")[0].style.height = "100vh";
			setTimeout(() => {
				window.setLoading(false);
			}, 3000);
		}
		count += 1;
	});
	return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */

export default function DFA({ currentState, setInput, setLoading }) {
	var counter;
	var toggle = true;
	let [model, setModel] = useState({});
	window.setLoading = setLoading;
	return (
		<Fragment>
			<div className="panel">
				<ReactDiagram
					initDiagram={initDiagram}
					divClassName="diagram-component"
					nodeDataArray={nodeDataArray}
					linkDataArray={linkDataArray}
				/>

				<div className="group">
					<div
						className="zoom"
						onMouseDown={() => {
							window.showPath(toggle,currentState);
							toggle = !toggle;
							// window.animateZoom();
						}}
					>
						<img src={reset} alt="reset zoom" style={{transform:"translateY(25%)"}} />
					</div>
					<div
						className="zoom"
						onMouseDown={() => {
							window.zoom(true);
							counter = setInterval(() => {
								window.zoom(true);
							}, 150);
						}}
						onMouseUp={() => {
							clearInterval(counter);
						}}
					>
						<img src={zoomIn} alt="zoom in" />
					</div>
					<div
						className="zoom"
						onMouseDown={() => {
							window.zoom(false);
							counter = setInterval(() => {
								window.zoom(false);
							}, 150);
						}}
						onMouseUp={() => {
							clearInterval(counter);
						}}
					>
						<img src={zoomOut} alt="zoom out" />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
