import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = (props) => {
	return (
		<div class="vw-100 vh-100">
			<div class="w-100 h-25 bg-dark text-white d-flex justify-content-evenly align-items-center ">
				<div class=" fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center p-4 ">
					<i class="far fa-clock"></i>
				</div>
				<div class=" fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center p-4 ">
					{props.num1}
				</div>
				<div class="  fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center  p-4 ">
					{props.num2}
				</div>
				<div class="fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center  p-4 ">
					{props.num3}
				</div>
				<div class="fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center  p-4 ">
					{props.num4}
				</div>
				<div class="fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center  p-4">
					{props.num5}
				</div>
				<div class="fs-1 text-white w-10 h-50 d-flex justify-content-evenly align-items-center p-4 ">
					{props.num6}
				</div>
			</div>
		</div>
	);
};
//numbering props
