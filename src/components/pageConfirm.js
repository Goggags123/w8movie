import React, { Component } from "react";
import "./pageConfirm.css";
import popcorn from "../images/popcornWhite.png";
import cola from "../images/colaWhite.png";
import popcornS from "../images/popcorn.png";
import colaS from "../images/cola.png";

export default class PageConfirm extends Component {
    render() {
        const info=this.props.info;
        const movie=this.props.movieinfo[info.movie];
    return(
        <div className="pageC">
            <img id="movieSelectedPic" src={movie.picture}/>
            <div className="name">{movie.name}</div>
            <div className="detail">
                <div>3 May 2021</div>
                <div className="stick"/>
                <div>{info.time=="Morning"?"09 : 50":info.time=="Afternoon"?"13 : 25":"17 : 40"}</div>
            </div>
            <div className="detail">
                <div>Theater 5</div>
                <div className="stick"/>
                <div>{info.sound}</div>
                <div className="stick"/>
                <div>{info.seat}</div>
            </div>

            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail"></div>
            <div className="detail">
            <div className="line"/>
                Add-On
            <div className="line"/>
            </div>

            <div className="allAddOn">
                <div id="popcorn" 
                className={info.popcorn?"added":"addOn"}
                onClick={()=>this.props.kept("popcorn",!info.popcorn)}>
                    {!info.popcorn?
                    <img src={popcorn}/>:
                    <img src={popcornS}/>}
                    <p>Popcorn</p>
                </div>
                <div id="cola" 
                className={info.cola?"added":"addOn"}
                onClick={()=>this.props.kept("cola",!info.cola)}>
                    {!info.cola?<img src={cola}/>:
                    <img src={colaS}/>}
                    <p>Cola</p>
                </div>
            </div>            
        </div>
    );
    }
}