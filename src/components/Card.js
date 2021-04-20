import React from "react";
import "./Card.css";
import Tilty from "react-tilty";

export default function Card({ src, alt, id, name, url }) {
	return (
		<Tilty className="card-container">
			<div
				className="profile-link"
				onClick={() => {
					window.location.href = url;
				}}
			>
				<img className="profile-pic" src={src} alt={alt} />
				<div className="profile-description">
					<div className="profile-name">{name}</div>
					<div className="profile-id">{id}</div>
				</div>
			</div>
		</Tilty>
	);
}
