import React, { Component } from "react";
import "./page2.css";
import audio from "../images/audio.png";
import soundtrack from "../images/soundtrack.png";


export default class Page2 extends Component {
    render() {
    return(
        <div className="page2">

            <div className={this.props.sound=="TH"?"selected":"sound"} onClick={()=>this.props.kept("sound","TH")}>
                <div/>
                <div className="soundpic"><img src={audio}/></div>
                <p>Thai Audio</p>
            </div>

            <div className={this.props.sound=="SUB"?"selected":"sound"} onClick={()=>this.props.kept("sound","SUB")}>
                <div/>
                <div className="soundpic"><img src={soundtrack}/></div>
                <p>Soundtrack</p>
            </div>
            
        </div>
    );
    }
}