import React from "react";
import Card from "../components/Card";
import engProfile from "../images/Eng's profile.png";
import donutProfile from "../images/Donut's profile.png";
import gagProfile from "../images/Gag's profile.png";
import mookProfile from "../images/Mook's profile.png";
import viewProfile from "../images/View's profile.png";
import krataiProfile from "../images/Kratai's profile.png";
import ideaProfile from "../images/Idea's profile.png";

export default function Credit({ show, isShown }) {
	const members = [
		{
			src: engProfile,
			alt: "Eng's profile",
			name: "ฐณดล อารีพิทักษ์",
			id: "61010265",
			url: "https://github.com/EnglyME",
		},
		{
			src: donutProfile,
			alt: "Donut's profile",
			name: "ณัฐพงศ์ พิพิธพรสิริกุล",
			id: "61010341",
			url: "https://github.com/NattapongPi",
		},
		{
			src: gagProfile,
			alt: "Gag's profile",
			name: "วงศกร ทวีทรัพย์มั่นคง",
			id: "61010918",
			url: "https://github.com/Goggags123",
		},
		{
			src: mookProfile,
			alt: "Mook's profile",
			name: "วิภาดา มีสกุล",
			id: "61010972",
			url: "https://github.com/iammook",
		},
		{
			src: viewProfile,
			alt: "View's profile",
			name: "วิภาดา แสนบุตร",
			id: "61010974",
			url: "https://github.com/viewipada",
		},
		{
			src: krataiProfile,
			alt: "Kratai's profile",
			name: "โสภิตา เอี่ยมจุ้ย",
			id: "61011163",
			url: "https://github.com/krataiiza55plus",
		},
		{
			src: ideaProfile,
			alt: "Idea's profile",
			name: "หัตถยาพร วงศ์เครือ",
			id: "61011167",
			url: "https://github.com/idea2409",
		},
	];
	return (
		<div
			style={{
				height: "100vh",
				position: "absolute",
				minWidth: "var(--body-with)",
				minHeight: "var(--movie-height)",
				width: "100vw",
				marginTop: "4%",
				zIndex:"-1000"
			}} id="credit" className ="hidden"
		>
			<div className="credit-container" >
				<div
					className="close-container"
					onClick={() => {
						const credit = document.getElementById("credit");
						if (credit) {
							if (isShown) credit.className = "hidden";
							else credit.className = "shown";
						}
						show(!isShown);
					}}
				>
					<div className="close-text">X</div>
				</div>
				<h1 className="title">Our Members</h1>
				<div className="cards-container">
					<div className="credit-row" style={{ margin: "0 0 1% 0" }}>
						{members.map((member, i) => {
							return i < 3 ? (
								<Card
									src={member.src}
									alt={member.alt}
									name={member.name}
									id={member.id}
									key={member.id}
									url={member.url}
								/>
							) : null;
						})}
					</div>
					<div className="credit-row">
						{members.map((member, i) => {
							return i >= 3 ? (
								<Card
									src={member.src}
									alt={member.alt}
									name={member.name}
									id={member.id}
									key={member.id}
									url={member.url}
								/>
							) : null;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
