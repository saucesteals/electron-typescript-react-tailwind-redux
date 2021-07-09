import logo from "@assets/icons/react.png";
import TestSvg from "@assets/icons/test.svg";
import ReactDOM from "react-dom";
import React from "react";

function render() {
	ReactDOM.render(
		<div className="flex bg-pink-300 h-screen w-screen justify-center items-center p-6">
			<h2>Hello from React!</h2>
			<img src={logo} />
			<img src={TestSvg} />
		</div>,
		document.getElementById("root")
	);
}

render();
