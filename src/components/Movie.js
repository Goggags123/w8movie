import React, { Component } from "react";
import "../components/Movie.css";
import drink from "../images/drink.png";
import popcorn from "../images/popcorn.png"
import hacker from "../images/hacker.jpg"
import beauty from "../images/beauty_and_the_beast.jpg"
import harry from "../images/harry.jpg"
import assasin from "../images/assasin.jpg"
import parasite from "../images/parasite.jpg"
import mulan from "../images/mulan.png"
const movieinfo = [
  {
    name: "Hacker",
    picture: hacker,
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Beauty and the Beast",
    picture: beauty,
    genre: "Lomantic, Fantasy",
    duration: "129 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Harry Potter",
    picture: harry,
    genre: "Fantasy",
    duration: "129 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Assasin",
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
      showTime: 1,
      seat: 1,
      sound: 1,
      beverage: false,
      popcorn: false,
      movie: 1,
    };
  }

  goRight = () => {
    if (this.state.movie<6)
    {
      this.setState({movie: this.state.movie+1});
      document.getElementById('scroller').scrollLeft+=50;
    }

  };

  goLeft = () => {
    if (this.state.movie>1)
    {
      this.setState({movie: this.state.movie-1});
      document.getElementById('scroller').scrollLeft-=50;
    }
  };

  movieSelected = (i) => {
    let total=(i+1 - this.state.movie) * 50;
    console.log(total)
    document.getElementById('scroller').scrollLeft+=total;
    this.setState({ movie: i+1 })
  }

  render() {
    
    console.log(this.state.movie)
    return (
      <div className="movie">

        <div id="title" className="head">
          Movie
        </div>
        <div className="movieInfo">
          <img
            className="moviePicInfo"
            src={movieinfo[this.state.movie - 1].picture}
          />
          <div className="movieTextInfo">
            <div className="name">{movieinfo[this.state.movie - 1].name}</div>
            <div className="wrapinfo">
              <div className="info">
                <div className="icon"><i class="fas fa-tags fa-xs"style={{color:"white",margin:"2px"}}></i></div>
                {movieinfo[this.state.movie - 1].genre}
              </div>
              <div className="info" >
                <div className="icon" ><i class="fas fa-hourglass-start fa-xs" style={{color:"white",marginLeft:"3.5px"}}></i></div>
                {movieinfo[this.state.movie - 1].duration}
              </div>
              <div className="info">
                <div className="icon" ><i class="far fa-calendar-alt fa-sm" style={{color:"white", marginLeft:"2.5px"}}></i></div>
                {movieinfo[this.state.movie - 1].date}
              </div>
              <div className="info">
                {movieinfo[this.state.movie - 1].description}
              </div>
            </div>
          </div>
        </div>
        
        <div className="left-right-fixer">
          <a id="left" className="leftleft" onClick={this.goLeft}><i class="fas fa-chevron-circle-left" style={{display:"flex",justifyContent:"center",marginTop:"3.5px",opacity:"0.9"}}></i></a>
          <a id="right" className="rightright" onClick={this.goRight}><i class="fas fa-chevron-circle-right" style={{display:"flex",justifyContent:"center",marginTop:"3.5px",opacity:"0.9"}}></i></a>
        <div id="scroller" className="otherMovie">
          <div id="container">
          
          <div className="empty1"/>
          <div className="empty2"/>
          {movieinfo.map((movie, i) => {
            return (
              <div
                key={i}
                id={"movie"+(i+1)}
                className={this.state.movie == i + 1 ? "mv-Y" : "mv-N"}
                onClick={()=>this.movieSelected(i)}
              >
                <img src={movie.picture} />
              </div>
            );
          })}
          <div className="empty2"/>
          <div className="empty1"/>
          </div>
        </div>
        </div>

        <div className="zone">
          <div className="function">
            <div className="head">Show Time</div>
            <div className="selector time">
              <div style={{width:"30%",margin:"5px",textAlign:"center"}}
                className={this.state.showTime == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ showTime: 1 })}
              >
                {showtime.time1}
              </div>
              <div style={{width:"30%",margin:"5px",textAlign:"center"}}
                className={this.state.showTime == 2 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ showTime: 2 })}
              >
                {showtime.time2}
              </div>
              <div style={{width:"30%",margin:"5px",textAlign:"center"}}
                className={this.state.showTime == 3 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ showTime: 3 })}
              >
                {showtime.time3}
              </div>
            </div>
          </div>

          <div className="function">
            <div className="head">Seat</div>
            <div className="selector seat">
              <div style={{width:"50%",margin:"5px",textAlign:"center"}}
                className={this.state.seat == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ seat: 1 })}
              >
                {seat.normal}
              </div>
              <div style={{width:"50%",margin:"5px",textAlign:"center"}}
                className={this.state.seat == 2 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ seat: 2 })}
              >
                {seat.honey}
              </div>
            </div>
          </div>

          <div className="function">
            <div className="head">Sound System</div>
            <div className="selector sound">
              <div style={{width:"50%",margin:"5px",textAlign:"center"}}
                className={this.state.sound == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ sound: 1 })}
              >
                {sound.thai}
              </div>
              <div style={{width:"50%",margin:"5px",textAlign:"center"}}
                className={this.state.sound == 2 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ sound: 2 })}
              >
                {sound.eng}
              </div>
            </div>
          </div>

          <div className="add-on function">
            <div className="head">Add-on</div>
            <div className="selector">
              <div className="button-N" style={{width:"50%",margin:"5px"}}>
                <div style={{marginTop:"10px",width:"100%",display:"flex",justifyContent:"center"}}>
                  <img src={popcorn} height="50px" />
                </div>
              </div>
              <div className="button-N" style={{width:"50%",margin:"5px"}}>
                <div style={{marginTop:"10px",width:"100%",display:"flex",justifyContent:"center"}}>
                  <img src={drink} height="50px" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="confirm">Confirm</div>
      </div>
    );
  }
}
