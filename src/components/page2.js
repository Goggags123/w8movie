import React, { Component } from "react";
import "./page2.css";
import audio from "../images/audio.png";
import soundtrack from "../images/soundtrack.png";


export default class Page2 extends Component {
    keptSound=(value)=>{
        if(value=="Subtitle" && this.props.movie.nationality=="Thai dub")this.props.kept("sound",value,false);
        else this.props.kept("sound",value,true);
    }

    theSUBClass=()=>{
        if(this.props.movie.nationality=="Thai dub")return "invalid"; 
        if(this.props.sound=="Subtitle")return "selected";
        return "sound";
    }

    render() {
    return(
        <div className="page2">

            <div className={this.props.sound=="Thai dub"?"selected":"sound"} onClick={()=>this.keptSound("Thai dub")}>
                <div/>
                <div className="soundpic"><img src={audio}/></div>
                <p>Thai Audio</p>
            </div>

            <div className={this.theSUBClass()} onClick={()=>this.keptSound("Subtitle")}>
                <div/>
                <div className="soundpic"><img src={soundtrack}/></div>
                <p>Soundtrack</p>
            </div>
            
        </div>
    );
    }
}