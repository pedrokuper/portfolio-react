import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";




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
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <h1>Hola, me llamo Pedro ... texto a desarrollar</h1>
                <FontAwesomeIcon icon={FaSass} />
              </div>
              <div className="section">
                <div className="social-media">
                  {" "}
                  aca van los iconos social media
                </div>
              </div>
              <div className="section">
                <p>aca van los skills</p>
              </div>
              <div className="section">
                <p>aca van los proyectos</p>
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
