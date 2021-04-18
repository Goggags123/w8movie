import React, { Component } from "react";
import "./page3.css";
import time1 from "../images/morning.png";
import time2 from "../images/afternoon.png";
import time3 from "../images/evening.png";

export default class Page3 extends Component {
    keptTime=(value)=>{
        if( value=="12 : 00" && (this.props.movie.nationality=="th" || this.props.sound=="SUB") ||
            value=="14 : 20" && this.props.movie.nationality=="en" && this.props.sound=="TH" )
            this.props.kept("time",value,false);
        else this.props.kept("time",value,true);
    }

    theMoringClass=()=>{
        if(this.props.movie.nationality=="th" || this.props.sound=="SUB")return "invalid"; 
        else if(this.props.time=="12 : 00")return "selected";
        else return "time";
    }

    theAfternoonClass=()=>{
        if(this.props.movie.nationality=="en" && this.props.sound=="TH")return "invalid"; 
        else if(this.props.time=="14 : 20")return "selected";
        else return "time";
    }

    theEveningClass=()=>{
        if(this.props.time=="16 : 40")return "selected";
        else return "time";
    }

    render() {
    return(
        <div className="page3">

            <div className={this.theMoringClass()} onClick={()=>this.keptTime("12 : 00")}>
                <img src={time1}/>
                <p>12:00</p>
                <div/>
            </div>

            <div className={this.theAfternoonClass()} onClick={()=>this.keptTime("14 : 20")}>
                <img src={time2}/>
                <p>14:20</p>
                <div/>
            </div>

            <div className={this.theEveningClass()} onClick={()=>this.keptTime("16 : 40")}>
                <img src={time3}/>
                <p>16:40</p>
                <div/>
            </div>
            
        </div>
    );
    }
}