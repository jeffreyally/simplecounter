//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/Home.jsx";

//render your react application

let time = 0;

const displaytimer = () => {
	time = time + 1;
	let timestring = "00000" + time;
	console.log(
		time >= 10
			? (timestring = "0000" + time)
			: "Error, check first ternary operator"
	);
	//time >= 10 ? (timestring = timestring.slice(1)) : "Error, check first ternary operator";
	console.log(
		time >= 100
			? (timestring = "000" + time)
			: "Error, check second ternary operator"
	);
	//time >= 100 ? (timestring = timestring.slice(2)) : "Error, check second ternary operator";
	console.log(
		time >= 1000
			? (timestring = "00" + time)
			: "Error, check third ternary operator"
	);
	//time >= 1000 ? (timestring = timestring.slice(3)) : "Error, check third ternary operator";
	console.log(
		time >= 10000
			? (timestring = "0" + time)
			: "Error, check fourth ternary operator"
	);
	//time >= 10000 ? (timestring = timestring.slice(4)) : "Error, check fourth ternary operator";
	console.log(
		time >= 100000
			? (timestring = "" + time)
			: "Error, check fifth ternary operator"
	);
	//time >= 100000 ? (timestring = timestring.slice(5)) : "Error, check fifth ternary operator";
	ReactDOM.render(
		<Home
			num1={timestring.charAt(0)}
			num2={timestring.charAt(1)}
			num3={timestring.charAt(2)}
			num4={timestring.charAt(3)}
			num5={timestring.charAt(4)}
			num6={timestring.charAt(5)}
		/>,
		document.querySelector("#app")
	);
};

setInterval(displaytimer, 1000);
