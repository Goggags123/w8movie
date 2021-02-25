import React from "react";
export default function Movie() {
  const movieinfo = {
    name: "Hacker",
    picture:
      "https://www.themoviedb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg",
    genre: "Adventure, Sci-fi",
    duration: "110 minutes",
    date: "March 4, 2021",
    description: "Leading actor : someone",
  };
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

  return (
    <div>
      <div>Movie</div>

      <div>
        {/* <img  src={movieinfo.picture}/> */}
        <div>
          <div>{movieinfo.name}</div>
          <div>{movieinfo.genre}</div>
          <div>{movieinfo.duration}</div>
          <div>{movieinfo.date}</div>
          <div>{movieinfo.description}</div>
        </div>
      </div>

      <div>
        <img />
      </div>

      <div>
        <div>Show Time</div>
        <button>{showtime.time1}</button>
        <button>{showtime.time2}</button>
        <button>{showtime.time3}</button>
      </div>

      <div>
        <div>Seat</div>
        <button>{seat.normal}</button>
        <button>{seat.honey}</button>
      </div>

      <div>
        <div>Sound System</div>
        <button>{sound.thai}</button>
        <button>{sound.eng}</button>
      </div>

      <div>
        <div>Add-on</div>
        <div>
          <button>Beverages</button>
          <img />
          <button>Popcorn</button>
          <img />
        </div>
      </div>

      <button>Confirm</button>
      
    </div>
  );
}
