import React, {useState}from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ selectedColor, setSelectedColor ] = useState("red");
 
	return (
		<div className="light">
			<div 
			onClick={()=> setSelectedColor("red")}
			className={
				"bulb red" + (selectedColor=== "red" ? " glow": "")}>

				</div>
			<div 
			onClick={()=> setSelectedColor("yellow")}
			className={
				"bulb yellow" + (selectedColor=== "yellow" ? " glow": "")}>
			</div>
			<div 
			onClick={()=> setSelectedColor("green")}
			className={
				"bulb green" + (selectedColor=== "green" ? " glow": "")}>
					
				</div>
			
		</div>
	);
};

export default Home;
