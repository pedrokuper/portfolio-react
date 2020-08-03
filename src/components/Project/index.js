import React from "react";
import "./style.scss";
class Project extends React.Component {
  render() {
    const { url, thumbnail, name } = this.props.project;
    return (
      <React.Fragment>
        <div className="wrapper">
          <p className="title">{name}</p>

          <a href={url} target="_blank"><img className="thumbnail" src={thumbnail} alt="" /></a>

          
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
