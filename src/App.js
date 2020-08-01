import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Bio from "./components/Bio";
import SocialMedia from "./components/SocialMedia";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
        scrollingSpeed={750}
        loopBottom={true}
        loopTop={true}
        //scrollBar={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <div className="social-media">
                  <SocialMedia />
                </div>
              </div>
              <div className="section">
                <Bio />
              </div>
              <div className="section">
                <div>
                  <Skills />
                </div>
              </div>
              <div className="section">
                <Projects />
              </div>
              <div className="section">
                <p>aca van un boton de contacto</p>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default App;

// <div id="fullpage-wrapper">
//   <div className="section">
//
//   </div>
//   <div className="section">
//
//   </div>
//
//
//   </div>
// </div>
