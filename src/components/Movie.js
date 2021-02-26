import React, { Component } from "react";
import "../components/Movie.css";
const movieinfo = [
  {
    name: "Hacker",
    picture:
      "https://www.themoviedb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Beauty and the Beast",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/Beauty_and_the_Beast_2017_poster.jpg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Harry Potter",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Assasin",
    picture:
      "https://m.media-amazon.com/images/M/MV5BNTczMTk3MjMyOV5BMl5BanBnXkFtZTgwMjA2Mjk4NjE@._V1_.jpg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  },
  {
    name: "Parasite",
    picture:
      "https://images.squarespace-cdn.com/content/511eea22e4b06642027a9a99/1579282606685-G5P026IF3J5092X1IZWM/Parasite+2019.jpg?content-type=image%2Fjpeg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
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
      showTime: 1,
      seat: 1,
      sound: 1,
      beverage: false,
      popcorn: false,
      movie: 1,
    };
  }
  render() {
    return (
      <div className="movie">
        {/* <div className="movieBg" /> */}

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
            <div className="info">
              <div className="icon" />
              {movieinfo[this.state.movie - 1].genre}
            </div>
            <div className="info">
              <div className="icon" />
              {movieinfo[this.state.movie - 1].duration}
            </div>
            <div className="info">
              <div className="icon" />
              {movieinfo[this.state.movie - 1].date}
            </div>
            <div className="info">
              {movieinfo[this.state.movie - 1].description}
            </div>
          </div>
        </div>

        <div className="otherMovie">
          {movieinfo.map((movie, i) => {
            return (
              <div
                key={i}
                className={this.state.movie == i + 1 ? "mv-Y" : "mv-N"}
                onClick={() => this.setState({ movie: i+1 })}
              >
                <img src={movie.picture} />
              </div>
            );
          })}
        </div>

        <div className="zone">
          <div className="function">
            <div className="head">Show Time</div>
            <div className="selector time">
              <div
                className={this.state.showTime == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ showTime: 1 })}
              >
                {showtime.time1}
              </div>
              <div
                className={this.state.showTime == 2 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ showTime: 2 })}
              >
                {showtime.time2}
              </div>
              <div
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
              <div
                className={this.state.seat == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ seat: 1 })}
              >
                {seat.normal}
              </div>
              <div
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
              <div
                className={this.state.sound == 1 ? "button-Y" : "button-N"}
                onClick={() => this.setState({ sound: 1 })}
              >
                {sound.thai}
              </div>
              <div
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
              <div className="button">
                <img />
              </div>
              <div className="button">
                <img />
              </div>
            </div>
          </div>
        </div>

        <div className="confirm">Confirm</div>
      </div>
    );
  }
}
