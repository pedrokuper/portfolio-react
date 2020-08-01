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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore
          ipsa animi, error est quibusdam consequatur, qui obcaecati itaque ab
          eius nostrum explicabo natus unde quis quo quidem sint dolorem! Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          architecto tempore nostrum, blanditiis, dolore sunt tempora minima
          veritatis maiores amet quaerat sit natus beatae error obcaecati sed.
          Quo, exercitationem voluptatum?
        </p>
      </div>
    );
  }
}

export default Bio;
