import React from "react";
import Colortab from "../components/ColorTab";
import DFA from "../components/DFA";
import Ellipse from "../components/Ellipse";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Ellipse className="ellipse1" />
      <Ellipse className="ellipse2" />
      <Ellipse className="ellipse3" />    
      <Colortab />

      <div style={{
        position: "absolute",
        top: "11%",
        bottom: "2%",
        width:"calc(100% - (8% / 3 * 2))",
        left: "calc(8% / 3)",
        backgroundColor:""}}>
        <Movie />
      </div>
    </div>
  );
}
