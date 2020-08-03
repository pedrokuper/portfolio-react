import React from "react";
import "./style.scss";

class Section extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <h2 className="section-title">{this.props.title}</h2>
        <div className="section-img-wrapper">
          <img className="section-img" src={this.props.img} />
        </div>
        <p className="mail">{this.props.mail}</p>
        <p className="text">{this.props.description}</p>
      </div>
    );
  }
}

export default Section;
