import React from "react";
import "./style.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-wrapper">
        <h1 className="social-title">
          Hola, me llamo Pedro ... texto a desarrollar
        </h1>
        <h2 className="social-text">texto a definir</h2>
        <div className="socialicons-wrapper">
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <FaTwitterSquare className="icon" />
          <FaYoutube className="icon" />
          <FaBehanceSquare className="icon" />
        </div>
      </div>
    );
  }
}

export default SocialMedia;
