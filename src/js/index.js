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
    let timestring = '00000' + time
	console.log(time);
	ReactDOM.render(<Home num1='' num2=''  num3='' num4='' num5='' num6=''/>, document.querySelector("#app"))};
//initialize variable outside and increment inside
setInterval(displaytimer, 1000);

//concatenate 5 zeros as a string for the timer
//how to access string "index" extract seperate digits from string