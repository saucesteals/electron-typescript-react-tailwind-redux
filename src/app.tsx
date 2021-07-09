import * as React from "react";
import * as ReactDOM from "react-dom";
import Reactlogo from "../assets/icons/react.png";
import TestSvg from "../assets/icons/test.svg";

function render() {
  ReactDOM.render(
    <div>
      <img src={Reactlogo} width="120" /> <h2>Hello from React!</h2>{" "}
      <img src={TestSvg} width="120" />{" "}
    </div>,
    document.body
  );
}

render();
