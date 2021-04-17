import * as go from "gojs";
var _CachedArrays = [];
export function freeArray(a) {
	a.length = 0; // clear any references to objects
	_CachedArrays.push(a);
}
export function tempArray() {
	var temp = _CachedArrays.pop();
	if (temp === undefined) return [];
	return temp;
}
export function getIntersection(p1x, p1y, p2x, p2y, q1x, q1y, q2x, q2y, result) {
	var dx1 = p1x - p2x;
	var dx2 = q1x - q2x;
	var x;
	var y;

	if (dx1 === 0 || dx2 === 0) {
		if (dx1 === 0) {
			var m2 = (q1y - q2y) / dx2;
			var b2 = q1y - m2 * q1x;
			x = p1x;
			y = m2 * x + b2;
		} else {
			var m1 = (p1y - p2y) / dx1;
			var b1 = p1y - m1 * p1x;
			x = q1x;
			y = m1 * x + b1;
		}
	} else {
		var m1 = (p1y - p2y) / dx1;
		var m2 = (q1y - q2y) / dx2;
		var b1 = p1y - m1 * p1x;
		var b2 = q1y - m2 * q1x;

		x = (b2 - b1) / (m1 - m2);
		y = m1 * x + b1;
	}

	result.x = x;
	result.y = y;
	return result;
}
export function createPolygon(sides) {
	// Point[] points = new Point[sides + 1];
	var points = tempArray();
	var radius = 0.5;
	var center = 0.5;
	var offsetAngle = Math.PI * 1.5;
	var angle = 0;

	// Loop through each side of the polygon
	for (var i = 0; i < sides; i++) {
		angle = ((2 * Math.PI) / sides) * i + offsetAngle;
		points[i] = new go.Point(
			center + radius * Math.cos(angle),
			center + radius * Math.sin(angle)
		);
	}

	// Add the last line
	// points[points.length - 1] = points[0];
	points.push(points[0]);
	return points;
}
export function createStar(points) {
	// First, create a regular polygon
	var polygon = createPolygon(points);
	// Calculate the points inbetween
	var pts = tempArray(); // new Point[points * 2 + 1];

	var half = Math.floor(polygon.length / 2);
	var count = polygon.length - 1;
	var offset = points % 2 === 0 ? 2 : 1;

	for (var i = 0; i < count; i++) {
		// Get the intersection of two lines
		var p0 = polygon[i];
		var p1 = polygon[i + 1];
		var q21 = polygon[(half + i - 1) % count];
		var q2off = polygon[(half + i + offset) % count];
		pts[i * 2] = p0;
		pts[i * 2 + 1] = getIntersection(
			p0.x,
			p0.y,
			q21.x,
			q21.y,
			p1.x,
			p1.y,
			q2off.x,
			q2off.y,
			new go.Point()
		); // ?? not currently managed
	}

	pts[pts.length] = pts[0];

	freeArray(polygon);
	return pts;
}
export function createBurst(points) {
	var star = createStar(points);
	var pts = tempArray(); // new Point[points * 3 + 1];

	pts[0] = star[0];
	for (var i = 1, count = 1; i < star.length; i += 2, count += 3) {
		pts[count] = star[i];
		pts[count + 1] = star[i];
		pts[count + 2] = star[i + 1];
	}

	freeArray(star);
	return pts;
}
