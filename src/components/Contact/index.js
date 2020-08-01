// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../../lottie/data.json";
import "./style.scss";

class UncontrolledLottie extends Component {
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
      <div>
        <div className="contact-wrapper">
          <p className="contact-title">CONTACT</p>
          <p className="contact-mail">pkupersmit@gmail.com</p>
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      </div>
    );
  }
}

export default UncontrolledLottie;

{
  /* 

</div> */
}
