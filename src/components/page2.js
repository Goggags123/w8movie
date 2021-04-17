import React, { Component } from "react";
import "./page2.css";
import audio from "../images/audio.png";
import soundtrack from "../images/soundtrack.png";


export default class Page2 extends Component {
    keptSound=(str)=>{
        this.props.movie.nationality=="th"?this.props.kept("sound",str):this.props.kept("sound",str);
    }

    theSUBClass=()=>{
        if(this.props.movie.nationality=="th")return "invalid"; 
        if(this.props.sound=="SUB")return "selected";
        return "sound";
    }

    render() {
    return(
        <div className="page2">

            <div className={this.props.sound=="TH"?"selected":"sound"} onClick={()=>this.keptSound("TH")}>
                <div/>
                <div className="soundpic"><img src={audio}/></div>
                <p>Thai Audio</p>
            </div>

            <div className={this.theSUBClass()} onClick={()=>this.keptSound("SUB")}>
                <div/>
                <div className="soundpic"><img src={soundtrack}/></div>
                <p>Soundtrack</p>
            </div>
            
        </div>
    );
    }
}