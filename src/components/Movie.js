import React, { Component } from "react";
import "../components/Movie.css";
import beauty from "../images/beauty_and_the_beast.jpg";
import assasin from "../images/assasin.jpg";
import parasite from "../images/parasite.jpg";
import mulan from "../images/mulan.png";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import PageConfirm from "./pageConfirm";
import PageSuccess from "./pageSuccess.js";
import next from "../images/next.png";
import back from "../images/back.png";
import { transition } from "../utils/Machine";
import { filter } from "minimatch";
import resetImg from "../images/reset.png";
const movieinfo = [
	{
		name: "Pee Mark",
		picture: beauty,
		nationality: "Thai",
		genre: "Romance, Fantasy",
		duration: "129 minutes",
		date: "March 4, 2021",
		description: "Leading actor : someone, someone",
		title: "P'Mark"
	},
	{
		name: "Joking Jazz 4G",
		picture: assasin,
		nationality: "Thai",
		genre: "Adventure, Sci-fi",
		duration: "105 minutes",
		date: "March 4, 2021",
		description: "Leading actor : someone , someone",
		title: "P'Jazz"
	},
	{
		name: "Mulan",
		picture: mulan,
		nationality: "Foreign",
		genre: "Adventure, Drama",
		duration: "115 minutes",
		date: "March 4, 2021",
		description: "Leading actor : someone , someone",
    	title: "Mulan"
	},
	{
		name: "Parasite",
		picture: parasite,
		nationality: "Foreign",
		genre: "Comedy",
		duration: "132 minutes",
		date: "March 4, 2021",
		description: "Leading actor : someone , someone",
    	title: "Parasite"
	},
];
const showtime = {
	time1: "12:00",
	time2: "14:20",
	time3: "16:40",
};
const seat = {
	normal: "Normal Seat",
	honey: "Honeymoon",
};
const sound = {
	thai: "Thai Audio",
	eng: "English Subtitle",
};

export default class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: "",
			seat: "",
			sound: "",
			cola: false,
			popcorn: false,
			movie: -1,
			step: 1,
			right: false,
			str: "",
			confirmed: false,
			ok:false,
		};
	}

	checkRight = () => {
		if (
			(this.state.step == 1 && this.state.movie != -1) ||
			(this.state.step == 2 && this.state.sound != "") ||
			(this.state.step == 3 && this.state.time != "") ||
			(this.state.step == 4 && this.state.seat != "") ||
			this.state.step == 5 && !this.state.confirmed
		)
			return true;
		return false;
	};
	goRight = () => {
		if (this.state.step == 5) this.kept("confirm", "", true);
		this.setState({ step: this.state.step + 1 });
	};

	goLeft = () => {
		if(this.state.step==6&&!this.state.ok)return;
		if(this.state.step==7){
			this.setState({step:4});
		}
		else if (this.state.step > 1) {
			this.setState({ step: this.state.step - 1 });
		}
	};

	movieSelected = (i) => {
		let total = (i + 1 - this.state.movie) * 50;
		document.getElementById("scroller").scrollLeft += total;
		this.setState({ movie: i + 1 });
	};

	stepDescription = () => {
		if (this.state.step == 1) return "เลือกภาพยนตร์";
		if (this.state.step == 2) return "เลือกเสียงพากย์";
		if (this.state.step == 3) return "เลือกรอบฉาย";
		if (this.state.step == 4) return "เลือกชนิดที่นั่ง";
		if (this.state.step > 4 ) return "ยืนยันการจอง";
	};

	getPage = () => {
		if (this.state.step == 1)
			return (
				<Page1
					info={movieinfo}
					movie={this.state.movie}
					kept={this.kept}
					currentState={this.props.currentState}
				/>
			);
		if (this.state.step == 2)
			return (
				<Page2
					movie={movieinfo[this.state.movie]}
					sound={this.state.sound}
					kept={this.kept}
					currentState={this.props.currentState}
				/>
			);
		if (this.state.step == 3)
			return (
				<Page3
					movie={movieinfo[this.state.movie]}
					sound={this.state.sound}
					time={this.state.time}
					kept={this.kept}
					currentState={this.props.currentState}
				/>
			);
		if (this.state.step == 4)
			return (
				<Page4
					seat={this.state.seat}
					kept={this.kept}
					currentState={this.props.currentState}
				/>
			);
		if (this.state.step > 4)
			return (
				<PageConfirm
					movieinfo={movieinfo}
					info={this.state}
					kept={this.kept}
					confirm={this.goRight}
					currentState={this.props.currentState}
					step={this.state.step}
				/>
			);
	};

	kept = (state, value, boolean) => {
		if(this.state.confirmed)return;
		this.setState({ str: this.state.str + value });
		if (state == "movie") {
			if (boolean)
				this.setState({
					movie: value,
					sound: "",
					time: "",
					seat: "",
					popcorn: "",
					cola: "",
				});
			this.props.setState(
				transition(
					this.props.currentState,
					movieinfo[value].title,
					this.props.toggle
				)
			);
			this.props.setInput([...this.props.input, movieinfo[value].title]);
		} else if (state == "sound") {
			if (boolean)
				this.setState({
					sound: value,
					time: "",
					seat: "",
					popcorn: "",
					cola: "",
				});
			this.props.setState(
				transition(this.props.currentState, value, this.props.toggle)
			);
			this.props.setInput([...this.props.input, value]);
		} else if (state == "time") {
			if (boolean)
				this.setState({ time: value, seat: "", popcorn: "", cola: "" });
			this.props.setState(
				transition(this.props.currentState, value, this.props.toggle)
			);
			this.props.setInput([...this.props.input, value]);
		} else if (state == "seat") {
			if (boolean) this.setState({ seat: value, popcorn: "", cola: "" });
			this.props.setState(
				transition(this.props.currentState, "Seat", this.props.toggle)
			);
			this.props.setInput([...this.props.input, value]);
		} else if (state == "popcorn") {
			this.setState({ popcorn: value });
			this.props.setState(
				transition(this.props.currentState, "Add-on", this.props.toggle)
			);
			this.props.setInput([...this.props.input, "popcorn"]);
		} else if (state == "cola") {
			this.setState({ cola: value });
			this.props.setState(
				transition(this.props.currentState, "Add-on", this.props.toggle)
			);
			this.props.setInput([...this.props.input, "cola"]);
		} else if (state == "confirm") {
			this.setState({ confirmed: true });
			this.props.setState(
				transition(this.props.currentState, "Confirm", this.props.toggle)
			);
			this.props.setInput([...this.props.input, "Confirm"]);
		}
	};

	reset = () => {
		window.location.reload(false);
	};

	render() {
		return (
			<div className="movie">
				<ul className="head" style={this.state.step==6?{opacity:"0.2",transition:"0.1s"}:{}}>
					<li className={this.state.step == 1 ? "inStep" : "completeStep"}></li>
					<li
						className={
							this.state.step == 2
								? "inStep"
								: this.state.step > 2
								? "completeStep"
								: "uncompleteStep"
						}
					></li>
					<li
						className={
							this.state.step == 3
								? "inStep"
								: this.state.step > 3
								? "completeStep"
								: "uncompleteStep"
						}
					></li>
					<li
						className={
							this.state.step == 4
								? "inStep"
								: this.state.step > 4
								? "completeStep"
								: "uncompleteStep"
						}
					></li>
					<li
						className={
							this.state.step == 5
								? "inStep"
								: this.state.step > 5
								? "completeStep"
								: "uncompleteStep"
						}
					></li>
				</ul>
				<div id="title" style={this.state.step==6?{opacity:"0.2",transition:"0.1s"}:{}}>{this.stepDescription()}</div>
				{this.getPage()}
				<div
					className={this.state.step == 1 || (this.state.step==6&&!this.state.ok)? "disabled left" : "enabled left"}
					onClick={this.goLeft}
				>
					<img src={back} />
				</div>
				<div
					className={
						this.state.step == 5 && !this.state.confirmed
							? "confirm right"
							: !this.checkRight()
							? this.state.ok?"enabled right":"disabled right"
							: "enabled right"
					}
					onClick={this.state.ok && this.state.step>4?this.reset:this.checkRight() ? this.goRight : null}
					onMouseEnter={() => {
						if (this.state.step == 5)
							window.highlightPart(this.props.currentState, "Honeymoon", false);
					}}
					onMouseLeave={() => {
						if (this.state.step == 5)
							window.highlightPart(this.props.currentState, "Honeymoon", true);
					}}
				>
					{this.state.ok && this.state.step>4? <img src={resetImg}/> :this.state.step == 5 && !this.state.confirmed ? <p>Confirm</p> : <img src={next} />}
				</div>
				{
					this.state.ok && this.state.step>4?"":
					<div className = {this.state.str==""?"disabled reset":"enabled reset"} onClick={this.state.str==""?{}:this.reset}>
						<img src={resetImg}/>
					</div>
				}
				{this.state.step>5 ? <PageSuccess step={this.state.step} next={()=>this.setState({step:this.state.step+1,ok:true})}/>:""}
			</div>
		);
	}
}
