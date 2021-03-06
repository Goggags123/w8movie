import React, { useState, Fragment } from "react";

import * as go from "gojs";
import { ReactDiagram } from "gojs-react";

import "./DFA.css";

import zoomIn from "../images/zoom-in.png";
import zoomOut from "../images/zoom-out.png";
import reset from "../images/reset-zoom.png";
import hidePath from "../images/eye.png";
import showPath from "../images/eye-closed.png";
import play from "../images/play.png";
import pause from "../images/pause.png";

import { createBurst, freeArray, GeneratorEllipseSpot1, GeneratorEllipseSpot2 } from "../utils/Geonometry";
import { nodeDataArray, linkDataArray } from "../utils/DiagramData";

function initDiagram() {
	const $ = go.GraphObject.make;
	// set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
	const diagram = $(go.Diagram, {
		isReadOnly: true,
		allowSelect: false,
		model: $(go.GraphLinksModel, {
			linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
		}),
	});

	go.Shape.defineFigureGenerator("Ring", function (shape, w, h) {
		var param1 = shape ? shape.parameter1 : NaN;
		if (isNaN(param1) || param1 < 0) param1 = 8;

		var rad = w / 2;
		var geo = new go.Geometry();
		var fig = new go.PathFigure(w, w / 2, true); // clockwise
		geo.add(fig);
		fig.add(
			new go.PathSegment(go.PathSegment.Arc, 0, 360, rad, rad, rad, rad).close()
		);

		var rad2 = Math.max(rad - param1, 0);
		if (rad2 > 0) {
			// counter-clockwise
			fig.add(new go.PathSegment(go.PathSegment.Move, w / 2 + rad2, w / 2));
			fig.add(
				new go.PathSegment(
					go.PathSegment.Arc,
					0,
					-360,
					rad,
					rad,
					rad2,
					rad2
				).close()
			);
		}
		geo.spot1 = GeneratorEllipseSpot1;
		geo.spot2 = GeneratorEllipseSpot2;
		geo.defaultStretch = go.GraphObject.Uniform;
		return geo;
	});
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
		{
			shadowColor: "white",
			shadowOffset: new go.Point(0, 0),
			shadowBlur: 20,
			isShadowed: true,
			shadowVisible: false,
		},
		$(
			go.Panel,
			"Spot",
			$(
				go.Shape,
				"Circle",
				{
					fill: "#A64568",
					stroke: "white",
					strokeWidth: 3,
					desiredSize: new go.Size(70, 70),
				},
				new go.Binding("fill", "color"),
				new go.Binding("figure", "shape"),				
				new go.Binding("desiredSize", "size"),		
				new go.Binding("stroke")
			)
		),
		$(
			go.TextBlock,
			{
				overflow: go.TextBlock.OverflowEllipsis,
				wrap: go.TextBlock.None,
				stroke: "white",
				font: "Normal 0.75rem Roboto",
				textAlign: "center",
			},
			new go.Binding("font"),
			new go.Binding("text", "text").makeTwoWay()
		)
	);
	diagram.linkTemplate = $(
		go.Link,
		new go.Binding("fromSpot", "fromSpot", go.Spot.parse),
		new go.Binding("toSpot", "toSpot", go.Spot.parse),
		{
			routing: go.Link.AvoidsNodes,
			corner: 10,
			adjusting: go.Link.End,
			isShadowed: true,
			shadowColor: "white",
			shadowOffset: new go.Point(0, 0),
			opacity: 0.5,
		},
		new go.Binding("routing"),
		new go.Binding("fromEndSegmentLength"),
		new go.Binding("toEndSegmentLength"),
		new go.Binding("points"),

		$(go.Shape, {
			stroke: "white",
			strokeWidth: 2,
			shadowVisible: false,
		}),
		$(go.Shape, {
			toArrow: "OpenTriangle",
			stroke: "white",
			strokeWidth: 2,
			shadowVisible: false,
		}),
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
				segmentFraction: 0.4,
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
	window.stopAnimation = (isStopped, currentState, toggle) => {
		//Stop animation
		if (!isStopped) {
			diagram.links.each(function (link) {
				const glow = link.findObject("GLOW");
				glow.fill = "transparent";
				glow.shadowVisible = false;
			});
			diagram.animationManager.stopAnimation(true);
			diagram.animationManager.isEnabled = false;
		} else {
			diagram.animationManager.isEnabled = true;
			window.animateColorAndFraction(currentState, toggle);
		}
	};
	window.highlight = (currentState) => {
		//Highlight node
		diagram.nodes.each(function (node) {
			node.shadowVisible = false;
			if (node.key != currentState) return;
			diagram.scrollToRect(node.actualBounds);
			node.shadowVisible = true;
		});
	};
	window.highlightPart = (currentState, to, unHighlight, toggle) => {
		//Highlight link
		if ("ontouchstart" in document.documentElement) return;
		diagram.links.each(function (link) {
			if (toggle) link.opacity = 0.5;
			else link.opacity = 0;
			if (link.elt(2)) link.elt(2).opacity = 0;
			if (!unHighlight) {
				if (link.data.label === undefined) return;
				if (
					link.data.from != currentState ||
					!link.data.label.includes(to) ||
					link.data.label.includes(to + " dub")
				)
					return;
			} else {
				if (link.data.from != currentState) return;
			}
			link.opacity = 1;
			link.elt(2).opacity = 1;
		});
		if (currentState == 0) diagram.findLinkForKey(-1).opacity = 1;
	};
	window.animateColorAndFraction = (currentState, toggle) => {
		//Animate pulsing
		if (!diagram.animationManager.isEnabled) return;
		var animation = new go.Animation();
		diagram.links.each(function (link) {
			const glow = link.findObject("GLOW");
			glow.fill = "transparent";
			glow.shadowVisible = false;
			if (toggle) link.opacity = 0.5;
			else link.opacity = 0;
			if (link.data.from != currentState) return;
			glow.fill = "white";
			glow.shadowVisible = true;
			glow.opacity = 1;
			animation.add(glow, "fraction", 0, 1);
			animation.duration = 3000;
			animation.runCount = Infinity;
			animation.start();
			link.opacity = 1;
		});
		if (currentState == 0) diagram.findLinkForKey(-1).opacity = 1;
	};
	window.zoom = (isZoomedIn) => {
		//Zoom
		if (isZoomedIn) {
			diagram.scale += 0.1;
		} else {
			diagram.scale -= 0.1;
		}
	};
	var zoomAnimation = new go.Animation();
	window.animateZoom = (isStopped) => {
		//Animate reset zoom
		if (!zoomAnimation.isAnimating && diagram.scale != 1) {
			if (isStopped) diagram.animationManager.isEnabled = true;
			zoomAnimation = new go.Animation();
			zoomAnimation.add(diagram, "scale", diagram.scale, 1);
			zoomAnimation.start();
		}
	};
	window.showPath = (toggle, currentState) => {
		//Show/Hide path
		diagram.links.each(function (link) {
			link.opacity = 0.5;
			if (link.data.from != currentState) {
				if (toggle) link.opacity = 0;
				return;
			}
			link.opacity = 1;
			if (currentState == 0) diagram.findLinkForKey(-1).opacity = 1;
		});
	};
	var count = 0;
	diagram.addDiagramListener("InitialLayoutCompleted", () => {
		if (count == 1) {
			window.scrollTo(0, 0);
			document.getElementsByTagName("body")[0].style.overflowY = "visible";
			document.getElementsByTagName("body")[0].style.height = "100vh";
			// diagram.findNodeForKey("201").position = diagram.findNodeForKey(
			// 	"200"
			// ).position;
			setTimeout(() => {
				window.setLoading(false);
				window.start();
			}, 3000);
		}
		count += 1;
	});
	// diagram.model.addNodeData(
	// 	// $(
	// 	// 	go.Panel,
	// 	// 	"Spot",
	// 	// 	$(
	// 	// 		go.Shape,
	// 	// 		"Circle",
	// 	// 		{
	// 	// 			fill: "red",
	// 	// 			stroke: "red",
	// 	// 			strokeWidth: 5,
	// 	// 			desiredSize: new go.Size(70, 70),
	// 	// 		},
	// 	// 		new go.Binding("fill", "color")
	// 	// 	)
	// 	// ),
	// 	{ key: 201, text: "gfhfg",Shape:"Square",fill:"red" }
	// );
	// diagram.model.addLinkData({ from:0,to:201 });
	return diagram;
}

/**
 * This function handles any changes to the GoJS model.
 * It is here that you would make any updates to your React state, which is dicussed below.
 */

export default function DFA({ toggle, currentState, setLoading, setToggle }) {
	let [isStopped, setStop] = useState(false);
	window.setLoading = setLoading;
	window.start = () => {
		window.animateColorAndFraction(currentState, toggle);
		window.highlight(currentState);
	};
	return (
		<Fragment>
			<div className="panel">
				<ReactDiagram
					initDiagram={initDiagram}
					divClassName="diagram-component"
					nodeDataArray={nodeDataArray}
					linkDataArray={linkDataArray}
				/>
				<div className="top-group">
					<div
						className="alternate"
						onClick={() => {
							window.stopAnimation(isStopped, currentState, toggle);
							setStop(!isStopped);
						}}
					>
						<img
							src={isStopped ? pause : play}
							alt={isStopped ? "pause" : "play"}
							style={
								isStopped
									? { width: "60%", transform: "translateX(30%)" }
									: { width: "80%", transform: "translate(25%,5%)" }
							}
						/>
					</div>
					<div
						className="alternate"
						onClick={() => {
							window.showPath(toggle, currentState);
							setToggle(!toggle);
						}}
					>
						<img
							src={toggle ? hidePath : showPath}
							alt={toggle ? "closed eye" : "eye"}
							style={{ width: "110%", transform: "translate(-5%,-5%)" }}
						/>
					</div>
				</div>
				<div className="bottom-group">
					<div
						className="zoom"
						onClick={() => {
							window.animateZoom(isStopped);
						}}
					>
						<img
							src={reset}
							alt="reset zoom"
							style={{ width: "110%", transform: "translate(-5%,25%)" }}
						/>
					</div>
					<div
						className="zoom"
						onClick={() => {
							window.zoom(true);
						}}
					>
						<img src={zoomIn} alt="zoom in" />
					</div>
					<div
						className="zoom"
						onClick={() => {
							window.zoom(false);
						}}
					>
						<img src={zoomOut} alt="zoom out" />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
