import React from "react";
import projects from "../../data/projects.json";
import Project from "../Project";
import "./style.scss";
class Projects extends React.Component {
  render() {
    return (
      <div className="wrapper">
        {projects.map((project, key) => {
          return <Project key={key} project={project} />;
        })}
      </div>
    );
  }
}

export default Projects;
