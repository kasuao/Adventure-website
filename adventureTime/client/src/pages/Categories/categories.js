import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
import CategoryLayout from "../../components/CategoryLayout";
import "./categories.css";

class Categories extends Component {
	render() {
		return(
			<div>
	
			<AdventureHeader/>



			<CategoryLayout/>
	
			


			<Footer></Footer>

				</div>
		
			);
	}
}


		

export default Categories;