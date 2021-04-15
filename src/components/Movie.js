import React, { Component } from "react";
import "../components/Movie.css";
import drink from "../images/drink.png";
import hacker from "../images/hacker.jpg"
import beauty from "../images/beauty_and_the_beast.jpg"
import harry from "../images/harry.jpg"
import assasin from "../images/assasin.jpg"
import parasite from "../images/parasite.jpg"
import mulan from "../images/mulan.png"
import Popcorn from "../icon/popcorn.svg";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import PageConfirm from "./pageConfirm";
import next from "../images/next.png";
import back from "../images/back.png";
const movieinfo = [
  // {
  //   name: "Harry Potter",
  //   picture: harry,
  //   genre: "Fantasy",
  //   duration: "129 minutes",
  //   date: "March 4, 2021",
  //   description: "Leading actor : someone",
  // },
  // {
  //   name: "Hacker",
  //   picture: hacker,
  //   genre: "Adventure, Sci-fi",
  //   duration: "110 minutes",
  //   date: "March 4, 2021",
  //   description: "Leading actor : someone",
  // },
  {
    name: "Beauty and the Beast",
    picture: beauty,
    genre: "Romance, Fantasy",
    duration: "129 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Assassin",
    picture: assasin,
    genre: "Adventure, Sci-fi",
    duration: "105 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Mulan",
    picture: mulan,
    genre: "Adventure, Drama",
    duration: "115 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Parasite",
    picture: parasite,
    genre: "Comedy",
    duration: "132 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  }
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
      step:1,
      right:false
    };
  }

  checkRight = () => {
    if(
        this.state.step==1 && this.state.movie!=-1 ||
        this.state.step==2 && this.state.sound!="" ||
        this.state.step==3 && this.state.time!="" ||
        this.state.step==4 && this.state.seat!="" ||
        this.state.step==5 ) return true;
    return false;

  }
  goRight = () => {
      this.setState({step:this.state.step+1});
  };

  goLeft = () => {
    if(this.state.step>1)
    {
      this.setState({step:this.state.step-1});
    }
  };

  movieSelected = (i) => {
    let total=(i+1 - this.state.movie) * 50;
    console.log(total)
    document.getElementById('scroller').scrollLeft+=total;
    this.setState({ movie: i+1 })
  }

  stepDescription = () => {
    if (this.state.step == 1)return "เลือกภาพยนตร์";
    if (this.state.step == 2)return "เลือกเสียงพากย์";
    if (this.state.step == 3)return "เลือกรอบฉาย";
    if (this.state.step == 4)return "เลือกชนิดที่นั่ง";
    if (this.state.step == 5)return "ยืนยันการจอง";
  }

  getPage = () => {
    if(this.state.step==1)return <Page1 info={movieinfo} movie={this.state.movie} kept={this.kept}/>;
    if(this.state.step==2)return <Page2 sound={this.state.sound} kept={this.kept}/>;
    if(this.state.step==3)return <Page3 time={this.state.time} kept={this.kept}/>;
    if(this.state.step==4)return <Page4 seat={this.state.seat} kept={this.kept}/>;
    if(this.state.step==5)return <PageConfirm movieinfo={movieinfo} info={this.state} kept={this.kept} confirm={this.goRight}/>;
  }

  kept = (state,value) => {
    if(state=="movie")this.setState({movie:value});
    else if(state=="sound")this.setState({sound:value});
    else if(state=="time")this.setState({time:value});
    else if(state=="seat")this.setState({seat:value});
    else if(state=="popcorn")this.setState({popcorn:value});
    else if(state=="cola")this.setState({cola:value});
  }

  reset = () => {
    this.setState({
    time: "",
    seat: "",
    sound: "",
    cola: false,
    popcorn: false,
    movie: -1,
    step:1,
    right:false

    })
  }

  render() {
    
    console.log(this.state.movie)
    return (
      <div className="movie">
        
        <ul className="head">
          <li className={this.state.step==1?"inStep":"completeStep"}></li>
          <li className={this.state.step==2?"inStep":this.state.step>2?"completeStep":"uncompleteStep"}></li>
          <li className={this.state.step==3?"inStep":this.state.step>3?"completeStep":"uncompleteStep"}></li>
          <li className={this.state.step==4?"inStep":this.state.step>4?"completeStep":"uncompleteStep"}></li>
          <li className={this.state.step==5?"inStep":this.state.step>5?"completeStep":"uncompleteStep"}></li>
        </ul>

        <div id="title">{this.stepDescription()}</div>
        
        {this.getPage()}
        
        {this.state.step==6?"":
        <div className={this.state.step==1?"disabled left":"enabled left"} onClick={this.goLeft}>
          <img src={back}/>
        </div>
        }
        
        {this.state.step!=6?
        <div  className={this.state.step==5?"confirm right":!this.checkRight()?"disabled right":"enabled right"} onClick={this.checkRight()?this.goRight:""}>
          {this.state.step==5?<p>confirm</p>:
            <img src={next}/>
          }
        </div>:

        <div className="reset" onClick={this.reset}>reset</div>

        }


      </div>
    );
  }
}
