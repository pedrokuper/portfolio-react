import React from "react";
import pp from "../../assets/img/pp.jpg";
import "./style.scss";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-wrapper">
        <h2 className="bio-title">ABOUT</h2>
        <img className="bio-img" src={pp} alt="" />

        <p className="bio-text">Lorem</p>
      </div>
    );
  }
}

export default Bio;
