import React, { Component } from "react";
import "./page3.css";
import time1 from "../images/morning.png";
import time2 from "../images/afternoon.png";
import time3 from "../images/evening.png";

export default class Page3 extends Component {
    keptTime=(value)=>{
        if( value=="Morning" && (this.props.movie.nationality=="Thai" || this.props.sound=="Subtitle") ||
            value=="Afternoon" && this.props.movie.nationality=="Foreign" && this.props.sound=="Thai dub" )
            this.props.kept("time",value,false);
        else this.props.kept("time",value,true);
    }

    theMoringClass=()=>{
        if(this.props.movie.nationality=="Thai" || this.props.sound=="Subtitle")return "invalid"; 
        else if(this.props.time=="Morning")return "selected";
        else return "time";
    }

    theAfternoonClass=()=>{
        if(this.props.movie.nationality=="Foreign" && this.props.sound=="Thai dub")return "invalid"; 
        else if(this.props.time=="Afternoon")return "selected";
        else return "time";
    }

    theEveningClass=()=>{
        if(this.props.time=="Evening")return "selected";
        else return "time";
    }

    render() {
    return(
        <div className="page3">

            <div className={this.theMoringClass()} onClick={()=>this.keptTime("Morning")}>
                <img src={time1}/>
                <p>{"09 : 50"}</p>
                <div/>
            </div>

            <div className={this.theAfternoonClass()} onClick={()=>this.keptTime("Afternoon")}>
                <img src={time2}/>
                <p>{"13 : 25"}</p>
                <div/>
            </div>

            <div className={this.theEveningClass()} onClick={()=>this.keptTime("Evening")}>
                <img src={time3}/>
                <p>{"17 : 40"}</p>
                <div/>
            </div>
            
        </div>
    );
    }
}