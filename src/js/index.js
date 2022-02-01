//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Home } from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//set interval generates number
//actively reload home component every sec
//set interval calls function which executes previous two steps
//pass numbers as props of home component

let time = 0;

const displaytimer = () => {
	time = time + 1;
	let timestring = "00000" + time;
	console.log(time >= 10 ? (timestring = "0000" + time) : "nada");
	//time >= 10 ? (timestring = timestring.slice(1)) : "nada";
	console.log(time >= 100 ? (timestring = "000" + time) : "nada");
	//time >= 100 ? (timestring = timestring.slice(2)) : "nada";
	console.log(time >= 1000 ? (timestring = "00" + time) : "nada");
	//time >= 1000 ? (timestring = timestring.slice(3)) : "nada";
	console.log(time >= 10000 ? (timestring = "0" + time) : "nada");
	//time >= 10000 ? (timestring = timestring.slice(4)) : "nada";
	console.log(time >= 100000 ? (timestring = "" + time) : "nada");
	//time >= 100000 ? (timestring = timestring.slice(5)) : "nada";
	ReactDOM.render(
		<Home
			num1={timestring.charAt(0)}
			num2={timestring.charAt(1)}
			num3={timestring.charAt(2)}
			num4={timestring.charAt(3)}
			num5={timestring.charAt(4)}
			num6={timestring.charAt(5)}
			//reread charAt()
		/>,
		document.querySelector("#app")
	);
};
//initialize variable outside and increment inside
setInterval(displaytimer, 1000);

//concatenate 5 zeros as a string for the timer
//how to access string "index" extract seperate digits from string
