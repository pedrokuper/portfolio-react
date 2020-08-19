import React from "react";
import "./style.scss";
class Project extends React.Component {
  render() {
    const { url, thumbnail, name, github } = this.props.project;
    return (
      <React.Fragment>
        <div class="item-wrapper">
          <p className="title">{name}</p>
          <a
            class="github-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>GitHub</p>
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="thumbnail" src={thumbnail} alt={`${name}`} />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;

//
