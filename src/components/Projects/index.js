import React from 'react';
import projects from "../../data/projects.json"
import Project from '../Project';
class Projects extends React.Component {
  render() {
    return(
      <div>{projects.map((project, key) => {
        return(
          <Project key={key} project={project}/>
        )
      })}</div>
    )
  }
}

export default Projects;