import React from "react";
import "./style.scss";

class Section extends React.Component {
  render() {
    return (
      <div className="container-wrapper">
        <h2 className="section-title">{this.props.title}</h2>
        <p className="text">{this.props.text}</p>
        <div className="section-img-wrapper">
          <img className="section-img" src={this.props.img} />
        </div>
        <a
          className="mail"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pkupersmit@gmail.com"
        >
          {this.props.mail}
        </a>
        <p className="text">{this.props.description}</p>
      </div>
    );
  }
}

export default Section;
