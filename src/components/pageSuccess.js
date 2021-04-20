import React, { Component } from "react";
import "./pageSuccess.css";
import successImg from "../images/success.png";

export default class PageSuccess extends Component {
	render() {
		return (
			<div className="pageS">
                <div className={this.props.step==6?"on success":"off success"}>
                    <div>
                        <img src={successImg} />
                        <p>Your order is successfully !</p>
                    </div>
                    <div onClick={()=>this.props.next()}>
                        <p>OK</p>
                    </div>
                </div>                
			</div>
		);
	}
}
