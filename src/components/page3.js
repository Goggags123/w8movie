import React, { Component } from "react";
import "./page3.css";
import time1 from "../images/morning.png";
import time2 from "../images/afternoon.png";
import time3 from "../images/evening.png";

export default class Page3 extends Component {
    render() {
    return(
        <div className="page3">

            <div className={this.props.time=="12 : 00"?"selected":"time"} onClick={()=>this.props.kept("time","12 : 00")}>
                <img src={time1}/>
                <p>12:00</p>
                <div/>
            </div>

            <div className={this.props.time=="14 : 20"?"selected":"time"} onClick={()=>this.props.kept("time","14 : 20")}>
                <img src={time2}/>
                <p>14:20</p>
                <div/>
            </div>

            <div className={this.props.time=="16 : 40"?"selected":"time"} onClick={()=>this.props.kept("time","16 : 40")}>
                <img src={time3}/>
                <p>16:40</p>
                <div/>
            </div>
            
        </div>
    );
    }
}