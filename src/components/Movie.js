import React from "react";
export default function Movie() {
  const movieinfo = {
    name: "Hacker",
    picture: 'https://www.themoviedb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
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
        <ul>
          <li>{showtime.time1}</li>
          <li>{showtime.time2}</li>
          <li>{showtime.time3}</li>
        </ul>
      </div>

      <div>
        <div>Seat</div>
        <ul>
          <li>{seat.normal}</li>
          <li>{seat.honey}</li>
        </ul>
      </div>

      <div>
        <div>Sound System</div>
        <ul>
          <li>{sound.thai}</li>
          <li>{sound.eng}</li>
        </ul>
      </div>

      <div>
        <div>Add-on</div>
        <ul>
          <li>
            <button>Beverages</button>
            <img />
          </li>
          <li>
            <button>Popcorn</button>
            <img />
          </li>
        </ul>
      </div>

      <button>Confirm</button>
    </div>
  );
}
