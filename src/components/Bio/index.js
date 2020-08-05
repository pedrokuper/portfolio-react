import React from "react";
import pp from "../../assets/img/pp.jpg";
import "./style.scss";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio-wrapper">
        <h2 className="bio-title">ABOUT</h2>
        <img className="bio-img" src={pp} alt="" />

        <p className="bio-text">
          Me formé como Diseñador de Imagen y Sonido en la Universidad de Buenos
          Aires. Tengo más de 10 años de experiencia trabajando como Editor de
          video y animador motion graphics para cine, tv y digital. Comencé a
          estudiar Desarrollo Web en{" "}
          <a
            href="https://courseit.com.ar/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            CourseIT
          </a>
          , y descubrí un mundo fascinante: el desarrollo web. Actualmente estoy
          buscando mi primera experiencia en este ámbito y estoy ansioso por
          trabajar y aprender lo máximo posible en el marco de proyectos
          profesionales.
        </p>
      </div>
    );
  }
}

export default Bio;
