import React from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";
class Project extends React.Component {
  render() {
    const { url, thumbnail, name, github } = this.props.project;
    return (
      <>
        <div className="item-wrapper">
          <p className="title">{name}</p>
          <a
            className="github-link"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <img className="thumbnail" src={thumbnail} alt={`${name}`} />
          </a>
        </div>
      </>
    );
  }
}

export default Project;

//
