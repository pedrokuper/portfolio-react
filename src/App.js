//Librerias
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Lottie from "react-lottie";
import animationData from "./lottie/data.json";
//React-Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";

import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

//Data externa
import pp from "./assets/img/pp.jpg";

//Componentes
import "./App.scss";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Bio from "./components/Bio";

class App extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollingSpeed={500}
        loopBottom={true}
        loopTop={true}
        navigation={true}
        //sectionsColor={["#F7F7F7", "#fff","#F7F7F7"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <div className="social-media">
                  <Section
                    title="¡Hola! Me llamo Pedro y soy un desarrollador web Front-End, apasionado por la tecnología, la web y el detrás de escena del mundo digital."
                    text="Encontrá mas información sobre mi en los siguientes links:"
                  />
                  <div className="social-icons-wrapper">
                    <a
                      href="https://www.linkedin.com/in/pedrokupersmit/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="icon" />
                    </a>
                    <a
                      href="https://github.com/pedrokuper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="icon" />
                    </a>
                    <a
                      href="https://twitter.com/_pedrokuper"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitterSquare className="icon" />
                    </a>
                    <a
                      href="https://www.youtube.com/user/kaaze7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaYoutube className="icon" />
                    </a>
                    <a
                      href="https://www.behance.net/PedroKupersmit"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaBehanceSquare className="icon" />
                    </a>
                    <a
                      href="https://codepen.io/thefragil3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCodepen className="icon" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="section">
                <Section title="ABOUT" img={pp} description="lorem ipsum" />
              </div> */}
              <div className="section">
                <Bio />
              </div>
              <div className="section">
                <div>
                  <Section
                    title="SKILLS"
                    text="Algunas de las tecnologías que manejo:"
                  />
                  <div className="social-icons-wrapper">
                    <FaHtml5 className="icon" />
                    <FaCss3Alt className="icon" />
                    <FaSass className="icon" />
                    <IoLogoJavascript className="icon" />
                    <FaReact className="icon" />
                    <FaGitSquare className="icon" />
                    <FaLinux className="icon" />
                  </div>
                </div>
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <Lottie options={defaultOptions} height={150} width={150} />
                <Section mail="pkupersmit@gmail.com" title="CONTACTO" />
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;
