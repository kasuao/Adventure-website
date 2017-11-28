import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
import CategoryLayout from "../../components/CategoryLayout";
import "./categories.css";

class Categories extends Component {
	// state = {
	// 	userName:["troutBoy234", "xtremeGuy", "iLuv2Hike"],
	// 	postedBy:"Posted By:",
	// 	age:"50"

	// };
	
	
	render() {
		return(
			<div>
	
			<AdventureHeader/>



			<CategoryLayout age="50" tagline=""
		
			/>
	
			


			<Footer></Footer>

				</div>
		
			);
	}
}


		

export default Categories;