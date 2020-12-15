//Librerias
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

//React-Icons
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { SiNextDotJs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
//Data externa

//Componentes
import "./App.scss";
import Projects from "./components/Projects";
import Section from "./components/Section";

class App extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        scrollingSpeed={500}
        loopBottom={true}
        loopTop={true}
        navigation={true}
        //scrollBar={true}
        //sectionsColor={["#F7F7F7", "#fff","#F7F7F7"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <div className="social-media">
                  <Section
                    title="¡Hola! Me llamo Pedro y soy  Front-End Developer :)"
                    text="Encontrá mas información sobre mi en los siguientes links"
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
              <div className="section">
                <div>
                  <Section
                    title="SKILLS"
                    text="Algunas de las tecnologías que manejo"
                  />
                  <div className="social-icons-wrapper">
                    <FaHtml5 className="icon" />
                    <div className="test"></div>

                    <FaCss3Alt className="icon" />
                    <SiTailwindcss className="icon" />
                    <FaSass className="icon" />
                    <IoLogoJavascript className="icon" />
                    <FaNodeJs className="icon" />
                    <FaReact className="icon" />
                    <SiNextDotJs className="icon" />
                    <FaGitSquare className="icon" />
                    <FaLinux className="icon" />
                  </div>
                </div>
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <div className="lottie">
                  {/* <Lottie options={defaultOptions} height={100} width={125} /> */}
                </div>
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
