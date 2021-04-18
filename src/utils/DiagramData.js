import * as go from "gojs";

const topRight = "0.90 0.15";
const topLeft = "0.75 0.05";
const topRightOffset = "1 0.25";
const topLeftOffset = "0.85 0.10";
const nodeSpacing = 150;
const layerSpacing = 200;
export let nodeDataArray = [
	{ key: 0, text: "Start", color: "#FF6C00", loc: `0 ${nodeSpacing * 3}` },
	{ key: 1, text: "Thai", loc: `${layerSpacing * 1} ${nodeSpacing * 0.5}` },
	{ key: 2, text: "Foreign", loc: `${layerSpacing * 1} ${nodeSpacing * 4.5}` },
	{ key: 3, text: "Thai dub", loc: `${layerSpacing * 2} ${nodeSpacing * 0.5}` },
	{ key: 4, text: "Thai dub", loc: `${layerSpacing * 2} ${nodeSpacing * 3}` },
	{ key: 5, text: "Subtitle", loc: `${layerSpacing * 2} ${nodeSpacing * 5.5}` },
	{ key: 6, text: "Afternoon", loc: `${layerSpacing * 3} 0` },
	{ key: 7, text: "Evening", loc: `${layerSpacing * 3} ${nodeSpacing}` },
	{ key: 8, text: "Morning", loc: `${layerSpacing * 3} ${nodeSpacing * 2.5}` },
	{ key: 9, text: "Evening", loc: `${layerSpacing * 3} ${nodeSpacing * 3.5}` },
	{ key: 10, text: "Afternoon", loc: `${layerSpacing * 3} ${nodeSpacing * 5}` },
	{ key: 11, text: "Evening", loc: `${layerSpacing * 3} ${nodeSpacing * 6}` },
	{ key: 12, text: "Seat", loc: `${layerSpacing * 4} ${nodeSpacing * 0.5}` },
	{ key: 13, text: "Seat", loc: `${layerSpacing * 4} ${nodeSpacing * 3}` },
	{ key: 14, text: "Seat", loc: `${layerSpacing * 4} ${nodeSpacing * 5.5}` },
	{ key: 15, text: "Add-on", loc: `${layerSpacing * 5} ${nodeSpacing * 0.5}` },
	{ key: 16, text: "Add-on", loc: `${layerSpacing * 5} ${nodeSpacing * 3}` },
	{ key: 17, text: "Add-on", loc: `${layerSpacing * 5} ${nodeSpacing * 5.5}` },
	{
		key: 200,
		text: "Confirm",
		color: "#FF6C00",
		loc: `${layerSpacing * 6} ${nodeSpacing * 3}`,
	},
	{
		key: 404,
		text: "Trap",
		color: "#FF6C00",
		loc: `${layerSpacing * 7} ${nodeSpacing * 3}`,
	},
];

export let linkDataArray = [
	{points:[-50,485,0,485], from:-1, to:0},
	////////////////////////////////////////(0) Start//////////////////////////////////////////
	{
		from: 0,
		to: 0,
		label:
			"Thai dub, Subtitle,\nMorning, Afternoon,\nEvening, Seat,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(20, 15),
	},
	{
		from: 0,
		to: 1,
		label: "Thai",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 0,
		to: 2,
		label: "Foreign",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(1) Thai//////////////////////////////////////////
	{
		from: 1,
		to: 1,
		label:
			"Thai, Subtitle,\n Morning, Afternoon,\nEvening, Seat,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRightOffset,
		toSpot: topLeftOffset,
		offset: new go.Point(0, 40),
	},
	{
		from: 1,
		to: 2,
		label: "Foreign",
		fromSpot: "LeftSide",
		toSpot: "LeftSide",
		fromEndSegmentLength: 50,
	},
	{
		from: 1,
		to: 3,
		label: "Thai dub",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(2) Foreign//////////////////////////////////////////
	{
		from: 2,
		to: 2,
		label: "Foreign, Morning,\nAfternoon, Evening,\nSeat, Add-on,\nConfirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 25),
	},
	{
		from: 2,
		to: 1,
		label: "Thai",
		fromSpot: "LeftSide",
		toSpot: "LeftSide",
		fromEndSegmentLength: 30,
	},
	{
		from: 2,
		to: 4,
		label: "Thai dub",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 2,
		to: 5,
		label: "Subtitle",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(3) Thai+Thai dub//////////////////////////////////////////
	{
		from: 3,
		to: 3,
		label: "Thai dub, Subtitle,\nMorning, Seat,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 20),
	},
	{
		from: 3,
		to: 1,
		label: "Thai",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 3,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        points: [440, 150, 440, 355, 214, 355, 214, 676] ,
		segmentIndex: -1,
		offset: new go.Point(10, 25),
	},
	{
		from: 3,
		to: 6,
		label: "Afternoon",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 3,
		to: 7,
		label: "Evening",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(4) Foreign+Thai dub//////////////////////////////////////////
	{
		from: 4,
		to: 4,
		label: "Thai dub, Afternoon,\nSeat, Add-on,\nConfirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 20),
	},
	{
		from: 4,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        points:[432, 450, 432, 240, 218, 240, 218, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(0, -20),
	},
	{
		from: 4,
		to: 2,
		label: "Foreign",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 4,
		to: 5,
		label: "Subtitle",
		fromSpot: "LeftSide",
		toSpot: "LeftSide",
        fromEndSegmentLength:60
	},
	{
		from: 4,
		to: 8,
		label: "Morning",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 4,
		to: 9,
		label: "Evening",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(5) Foreign+Thai dub//////////////////////////////////////////
	{
		from: 5,
		to: 5,
		label: "Subtitle, Morning,\nSeat, Add-on,\nConfirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 20),
	},
	{
		from: 5,
		to: 1,
		label: "Thai",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",
        points: [400, 860, 360, 860, 360, 230, 205, 230, 205, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(20, -20),
	},
	{
		from: 5,
		to: 2,
		label: "Foreign",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 5,
		to: 4,
		label: "Thai dub",
		fromSpot: "LeftSide",
		toSpot: "LeftSide",
        fromEndSegmentLength:50
	},
	{
		from: 5,
		to: 10,
		label: "Afternoon",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 5,
		to: 11,
		label: "Evening",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(6) Thai+Thai dub+Afternoon//////////////////////////////////////////
	{
		from: 6,
		to: 6,
		label: "Afternoon, Subtitle,\nMorning, Add-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-50, 50),
	},
	{
		from: 6,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "TopSide",
		toEndSegmentLength: 50,
		segmentIndex: -1,
		offset: new go.Point(0, 20),
	},
	{
		from: 6,
		to: 2,
		label: "Foreign",
		fromSpot: "LeftSide",
		toSpot: "TopSide",
        points: [600, 50, 550, 50,550, 350, 222, 350, 222, 676] ,
		segmentIndex: -1,
		offset: new go.Point(0, 25),
	},
	{
		from: 6,
		to: 3,
		label: "Thai dub",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 6,
		to: 7,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        segmentIndex:-1,
		offset: new go.Point(-10, 30),
	},
	{
		from: 6,
		to: 12,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(7) Thai+Thai dub+Evening//////////////////////////////////////////
	{
		from: 7,
		to: 7,
		label: "Evening, Subtitle,\nMorning, Add-on,\nConfirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 20),
	},
	{
		from: 7,
		to: 1,
		label: "Thai",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",        
        points:[625, 223, 625, 275, 264, 275, 264, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-70, -20),
	},
	{
		from: 7,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        points: [645, 224,645, 345, 230, 345, 230, 676] ,
		segmentIndex: -1,
		offset: new go.Point(-10, 25),
	},
	{
		from: 7,
		to: 3,
		label: "Thai dub",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 7,
		to: 6,
		label: "Afternoon",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        segmentIndex:-1,
		offset: new go.Point(-10, -35),
	},
	{
		from: 7,
		to: 12,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(8) Foreign+Thai dub+Morning//////////////////////////////////////////
	{
		from: 8,
		to: 8,
		label: "Morning, Afternoon,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-40, 30),
	},
	{
		from: 8,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "BottomSide",        
        points:[635, 370, 635, 260, 243, 260, 243, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-40, -20),
	},
	{
		from: 8,
		to: 2,
		label: "Foreign",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",
		fromEndSegmentLength: 30,
		toEndSegmentLength: 330,
		segmentIndex: -1,
		offset: new go.Point(-50, -30),
	},
	{
		from: 8,
		to: 4,
		label: "Thai dub",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 8,
		to: 5,
		label: "Subtitle",
		fromSpot: "LeftSide",
		toSpot: "TopSide",
        points: [600, 430,555, 430, 555, 700,415, 700, 415, 825] ,
		segmentIndex: -1,
		offset: new go.Point(10, 25),
	},
	{
		from: 8,
		to: 9,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        segmentIndex:-1,
		offset: new go.Point(-10, 30),
	},
	{
		from: 8,
		to: 13,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(9) Foreign+Thai dub+Evening//////////////////////////////////////////
	{
		from: 9,
		to: 9,
		label: "Evening, Afternoon,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-10, 20),
	},
	{
		from: 9,
		to: 1,
		label: "Thai",
		fromSpot: "RightSide",
		toSpot: "BottomSide",
        points:[670, 545, 725, 545, 725, 280,270, 280, 270, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-80, -20),
	},
	{
		from: 9,
		to: 2,
		label: "Foreign",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",
		fromEndSegmentLength: 20,
		toEndSegmentLength: 310,
		segmentIndex: -1,
		offset: new go.Point(-40, -30),
	},
	{
		from: 9,
		to: 4,
		label: "Thai dub",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 9,
		to: 5,
		label: "Subtitle",
		fromSpot: "LeftSide",
		toSpot: "TopSide",
        points: [600, 580,535, 580, 535, 695,423, 695, 423, 825] ,
		segmentIndex: -1,
		offset: new go.Point(0, 25),
	},
	{
		from: 9,
		to: 8,
		label: "Morning",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        segmentIndex:-1,
		offset: new go.Point(-10, -35),
	},
	{
		from: 9,
		to: 13,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(10) Foreign+Subtitle+Afternoon//////////////////////////////////////////
	{
		from: 10,
		to: 10,
		label: "Afternoon, Morning,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-10, 20),
	},
	{
		from: 10,
		to: 1,
		label: "Thai",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",     
        points:[600, 765, 580, 765, 580, 245,224, 245, 224, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-10, -20),
	},
	{
		from: 10,
		to: 2,
		label: "Foreign",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",
        fromEndSegmentLength:40,
		toEndSegmentLength: 250,
		segmentIndex: -1,
		offset: new go.Point(-10, -30),
	},
	{
		from: 10,
		to: 4,
		label: "Thai dub",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        points:[637, 750,637, 610, 416, 610, 416, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(20, -30),
	},
	{
		from: 10,
		to: 5,
		label: "Subtitle",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 10,
		to: 11,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        segmentIndex:-1,
		offset: new go.Point(-10, 30),
	},
	{
		from: 10,
		to: 14,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(11) Foreign+Subtitle+Afternoon//////////////////////////////////////////
	{
		from: 11,
		to: 11,
		label: "Evening, Morning,\nAdd-on, Confirm",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-10, 20),
	},
	{
		from: 11,
		to: 1,
		label: "Thai",
		fromSpot: "LeftSide",
		toSpot: "BottomSide",
        points:[600, 920, 545, 920, 545, 235, 212, 235, 212, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(10, -20),
	},
	{
		from: 11,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 190,
		segmentIndex: -1,
		offset: new go.Point(20, -30),
	},
	{
		from: 11,
		to: 4,
		label: "Thai dub",
		fromSpot: "LeftSide",
		toSpot: "BottomSide", 
        points:[600, 935,585, 935,585, 625, 440, 625, 440, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(-10, -30),
	},
	{
		from: 11,
		to: 5,
		label: "Subtitle",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 11,
		to: 10,
		label: "Afternooon",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        segmentIndex:-1,
		offset: new go.Point(-10, -35),
	},
	{
		from: 11,
		to: 14,
		label: "Seat",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	////////////////////////////////////////(12) Thai+Thai dub+Seat//////////////////////////////////////////
	{
		from: 12,
		to: 12,
		label: "Subtitle, Morning,\nSeat",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(-20, 20),
	},
	{
		from: 12,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "TopSide",
		toEndSegmentLength: 90,
		segmentIndex: -1,
		offset: new go.Point(-5, 20),
	},
	{
		from: 12,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        points: [825, 148,825, 340, 238, 340, 238, 676] ,
		segmentIndex: -1,
		offset: new go.Point(-20, 25),
	},
	{
		from: 12,
		to: 3,
		label: "Thai dub",
		fromSpot: "TopSide",
		toSpot: "TopSide",
		toEndSegmentLength: 115,
		segmentIndex: -1,
		offset: new go.Point(0, 30),
	},
	{
		from: 12,
		to: 6,
		label: "Afternoon",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 12,
		to: 7,
		label: "Evening",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 12,
		to: 15,
		label: "Add-on",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
	{
		from: 12,
		to: 200,
		label: "Confirm",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        toEndSegmentLength:290,
        segmentIndex:-1,
        offset: new go.Point(70,-25)
	},

	////////////////////////////////////////(13) Foreign+Thai dub+Seat//////////////////////////////////////////
	{
		from: 13,
		to: 13,
		label: "Afternoon, Seat",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 5),
	},
	{
		from: 13,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "BottomSide",        
        points:[835, 445, 835, 265, 250, 265, 250, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-50, -20),
	},
	{
		from: 13,
		to: 2,
		label: "Foreign",
		fromSpot: "RightSide",
		toSpot: "BottomSide",
		fromEndSegmentLength: 20,
		toEndSegmentLength: 290,
		segmentIndex: -1,
		offset: new go.Point(-30, -30),
	},
	{
		from: 13,
		to: 4,
		label: "Thai dub",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
        points:[820, 523,820, 630, 448, 630, 448, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(-20, -30),
	},
	{
		from: 13,
		to: 5,
		label: "Subtitle",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        points: [832, 520, 832, 690,431, 690, 431, 825] ,
		segmentIndex: -1,
		offset: new go.Point(-10, 25),
	},
	{
		from: 13,
		to: 8,
		label: "Morning",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 13,
		to: 9,
		label: "Evening",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 13,
		to: 16,
		label: "Add-on",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
        points:[870,475,1000,475],
        segmentIndex:-1,
		offset: new go.Point(0, -10),
	},
	{
		from: 13,
		to: 200,
		label: "Confirm",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		fromEndSegmentLength:50,
		offset: new go.Point(0, -30),
	},
	////////////////////////////////////////(14) Thai+Subtitle+Seat//////////////////////////////////////////
	{
		from: 14,
		to: 14,
		label: "Morning, Seat",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 5),
	},
	{
		from: 14,
		to: 1,
		label: "Thai",
		fromSpot: "RightSide",
		toSpot: "BottomSide",
        points:[870, 850, 900, 850, 900, 250, 230, 250, 230, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-20, -20),
		
	},
	{
		from: 14,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 210,
		segmentIndex: -1,
		offset: new go.Point(10, -30),
	},
	{
		from: 14,
		to: 4,
		label: "Thai dub",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        points:[842, 825,842, 615, 424, 615, 424, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(10, -30),
	},
	{
		from: 14,
		to: 5,
		label: "Subtitle",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 200,
		segmentIndex: -1,
		offset: new go.Point(40, -30),
	},
	{
		from: 14,
		to: 10,
		label: "Afternoon",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 14,
		to: 11,
		label: "Evening",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 14,
		to: 17,
		label: "Add-on",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
        points:[870,865,1000,865],
        segmentIndex:-1,
		offset: new go.Point(0, -10),
	},
	{
		from: 14,
		to: 200,
		label: "Confirm",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
        offset: new go.Point(60,30)
	},
	////////////////////////////////////////(15) Thai+Thai dub+Seat+Add-on//////////////////////////////////////////
	{
		from: 15,
		to: 15,
		label: "Subtitle, Morning,\nAdd-on",
		routing: "curve",
		fromSpot: topRightOffset,
		toSpot: topLeftOffset,
		offset: new go.Point(-10, 25),
	},
	{
		from: 15,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "TopSide",
		toEndSegmentLength: 110,
		segmentIndex: -1,
		offset: new go.Point(-15, 20),
	},
	{
		from: 15,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "TopSide",        
        points: [1052, 148,1052, 335, 246, 335, 246, 676] ,
		segmentIndex: -1,
		offset: new go.Point(-30, 25),
	},
	{
		from: 15,
		to: 3,
		label: "Thai dub",
		fromSpot: "TopSide",
		toSpot: "TopSide",
		toEndSegmentLength: 135,
		segmentIndex: -1,
		offset: new go.Point(0, 30),
	},
	{
		from: 15,
		to: 6,
		label: "Afternoon",
		fromSpot: "TopSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 15,
		to: 7,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 15,
		to: 12,
		label: "Seat",
		offset: new go.Point(0, 10),
		fromSpot: "LeftSide",
		toSpot: "RightSide",
	},
	{
		from: 15,
		to: 200,
		label: "Confirm",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},

	////////////////////////////////////////(16) Foreign+Thai dub+Seat+Add-on//////////////////////////////////////////
	{
		from: 16,
		to: 16,
		label: "Afternoon, Add-on",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 5),
	},
	{
		from: 16,
		to: 1,
		label: "Thai",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        points:[1043, 450, 1043, 270, 257, 270, 257, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-60, -20),
	},
	{
		from: 16,
		to: 2,
		label: "Foreign",
		fromSpot: "RightSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 270,
		segmentIndex: -1,
		offset: new go.Point(-20, -30),
	},
	{
		from: 16,
		to: 4,
		label: "Thai dub",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
        points:[1020, 523,1020, 635, 456, 635, 456, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(-30, -30),
	},
	{
		from: 16,
		to: 5,
		label: "Subtitle",
		fromSpot: "BottomSide",
		toSpot: "TopSide",
        points: [1052, 523, 1052, 685,439, 685, 439, 825] ,
		segmentIndex: -1,
		offset: new go.Point(-20, 25),
	},
	{
		from: 16,
		to: 8,
		label: "Morning",
		fromSpot: "TopSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 16,
		to: 9,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 16,
		to: 13,
		label: "Seat",
		fromSpot: "LeftSide",
		toSpot: "RightSide",
        points:[1000,490,870,490],
        segmentIndex:-1,
		offset: new go.Point(0, 10),
	},
	{
		from: 16,
		to: 200,
		label: "Confirm",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
		segmentIndex:-1,
		offset: new go.Point(20, -10),
        points:[1070,490,1200,490],
	},
	////////////////////////////////////////(17) Foreign+Subtitle+Seat+Add-on//////////////////////////////////////////
	{
		from: 17,
		to: 17,
		label: "Morning, Add-on",
		routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
		offset: new go.Point(0, 5),
	},
	{
		from: 17,
		to: 1,
		label: "Thai",
		fromSpot: "RightSide",
		toSpot: "BottomSide",
        points:[1075, 860, 1130, 860, 1130, 255, 236, 255, 236, 148,] ,
		segmentIndex: -1,
		offset: new go.Point(-30, -20),
		
	},
	{
		from: 17,
		to: 2,
		label: "Foreign",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 230,
		segmentIndex: -1,
		offset: new go.Point(0, -30),
	},
	{
		from: 17,
		to: 4,
		label: "Thai dub",
		fromSpot: "TopSide",
		toSpot: "BottomSide",
        points:[1045, 825,1045, 620, 432, 620, 432, 523,] ,
		segmentIndex: -1,
		offset: new go.Point(0, -30),
	},
	{
		from: 17,
		to: 5,
		label: "Subtitle",
		fromSpot: "BottomSide",
		toSpot: "BottomSide",
		toEndSegmentLength: 180,
		segmentIndex: -1,
		offset: new go.Point(10, -30),
	},
	{
		from: 17,
		to: 10,
		label: "Afternoon",
		fromSpot: "TopSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 17,
		to: 11,
		label: "Evening",
		fromSpot: "BottomSide",
		toSpot: "RightSide",
		offset: new go.Point(0, 10),
	},
	{
		from: 17,
		to: 14,
		label: "Seat",
		fromSpot: "LeftSide",
		toSpot: "RightSide",
        points:[1000,880,870,880],
        segmentIndex:-1,
		offset: new go.Point(0, 10),
	},
	{
		from: 17,
		to: 200,
		label: "Confirm",
		fromSpot: "RightSide",
		toSpot: "LeftSide",
	},
    ////////////////////////////////////////(200) Confirm//////////////////////////////////////////
	{
		from: 200,
		to: 404,
		label: "Thai, Foreign,\nThai dub, Subtitle,\nMorning, Afternoon,\nEvening, Seat,\nAdd-on, Confirm",
		fromSpot: "Right",
		toSpot: "Left",
        segmentIndex:2,
		offset: new go.Point(0, -40),
	},
    ////////////////////////////////////////(404) Trap//////////////////////////////////////////
	{
		from: 404,
		to: 404,
		label: "Thai, Foreign,\nThai dub, Subtitle,\nMorning, Afternoon,\nEvening, Seat,\nAdd-on, Confirm",
        routing: "curve",
		fromSpot: topRight,
		toSpot: topLeft,
        // segmentIndex:2,
		offset: new go.Point(40, 10),
	},
];
