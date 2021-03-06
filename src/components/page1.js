import React, { Component } from "react";
import "./page1.css";

export default class Page1 extends Component {
    render() {
        const movieinfo=this.props.info;
    return(
        <div className="page">
          {movieinfo.map((movie, i) => {
            return (
              <div
                key={i}
                id={"movie"+(i+1)}
                className={this.props.movie==i?"selected movieInfo":"movieInfo"}
                onClick={()=>this.props.kept("movie",i,true)}
                onMouseEnter = {() => {window.highlightPart(this.props.currentState,movieinfo[i].nationality == "Thai" ? movieinfo[i].title:movieinfo[i].name,false,this.props.toggle)}}
                onMouseLeave = {() => {window.highlightPart(this.props.currentState,movieinfo[i].nationality == "Thai" ? movieinfo[i].title:movieinfo[i].name,true,this.props.toggle)}}
              >
                <img
                  className="moviePicInfo"
                  src={movieinfo[i].picture}
                />
                <div className="movieTextInfo">
                  <div>
                    <div className="name">{movieinfo[i].name}</div>
                    <div className="wrapinfo">
                      <div className="info">
                        <div className="icon"><i className="fas fa-tags fa-xs"></i></div>
                        {movieinfo[i].genre}
                      </div>
                      <div className="info" >
                        <div className="icon" ><i className="fas fa-hourglass-start fa-xs"></i></div>
                        {movieinfo[i].duration}
                      </div>
                      <div className="info">
                        {movieinfo[i].description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    );
    }
}