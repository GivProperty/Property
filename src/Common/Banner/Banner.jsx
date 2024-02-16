import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="content">
          <h2>{props.title}</h2>
          <div className="buttons">
            <Link>Add Property</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
      </div>
      <img
        className="rotateme one"
        src={require("../../Assests/Icons/Animation/1.png")}
        alt=""
      />
      <img
        className="blue b"
        src={require("../../Assests/Icons/Animation/1.png")}
        alt=""
      />
      <img
        className="orange o"
        src={require("../../Assests/Icons/Animation/orange.png")}
        alt=""
      />
    </div>
  );
}

export default Banner;
