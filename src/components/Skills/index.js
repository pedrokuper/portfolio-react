import React from "react";
import "./style.scss";

import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

class Skills extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="skills-title">SKILLS</h2>
        <div className="skills-wrapper">
          <FaHtml5 className="icon" />
          <FaCss3Alt className="icon" />
          <FaSass className="icon" />
          <IoLogoJavascript className="icon" />
          <FaReact className="icon" />
          <FaGitSquare className="icon" />
          <FaLinux className="icon" />
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;
