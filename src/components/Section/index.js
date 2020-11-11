import React from "react";
import "./style.scss";

class Section extends React.Component {
  render() {
    const { title, text, img, description, mail } = this.props;
    return (
      <div className="container-wrapper">
        <h2 className="section-title">{title}</h2>
        <p className="text">{text}</p>
        <div className="section-img-wrapper">
          <img className="section-img" src={img} alt="" />
        </div>
        <a className="mail" href="mailto:pkupersmit@gmail.com">
          {mail}
        </a>
        <p className="text">{description}</p>
      </div>
    );
  }
}

export default Section;
