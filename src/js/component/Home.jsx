import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = (props) => {
	return (
		<div class="vw-100 vh-100">
			<div class="w-100 h-25 bg-dark text-white d-flex">
				<div class="text-white">clockicon</div>
				<div class="text-white">{props.num1}</div>
				<div class="text-white">{props.num2}</div>
				<div class="text-white">{props.num3}</div>
				<div class="text-white">{props.num4}</div>
				<div class="text-white">{props.num5}</div>
				<div class="text-white">{props.num6}</div>
			</div>
		</div>
	);
};
//numbering props
