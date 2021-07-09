import logo from "@assets/icons/react.png";
import TestSvg from "@assets/icons/test.svg";
import ReactDOM from "react-dom";
import React from "react";
import Routes from "./Routes";

function render() {
	ReactDOM.render(<Routes />, document.getElementById("root"));
}

render();
