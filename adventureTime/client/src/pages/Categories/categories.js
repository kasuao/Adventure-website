import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
// import CategoryLayout from "../../components/CategoryLayout";
import BodyCategory from "../../components/BodyCategory";
import "./categories.css";

class Categories extends Component {
	
	
	state = {
		// data to populate the site
	 
	    adventures: [
	      {
	      "userName" : "",
	      "adventure" : "",
	      "difficultyLevel" : "",
	      "landscapeLevel" : "",
	      "funLevel" : "",
	      "adventurePic": "",
	      "description" : "",
	      "_id": ""
	      }
	    ],

	};
	
	componentDidMount(){
		this.getData();
	}

	getData = event => {
		API.getAdventures()
		.then(res =>{
			let tempArray = [];
			for (var i = 0; i < res.data.length; i++) {
			  tempArray.push(res.data[i]);
			}
			this.setState({
				adventures: tempArray
			})
			console.log(res);
			console.log(this.state.adventures);
			console.log(this.state.adventures[0].adventure);
		})
			.catch(err => console.log(err));
	
	}
	





	
	
	render() {
		return(
			<div>
	
			<AdventureHeader/>

		

			<BodyCategory

			adventures={this.state.adventures}>
				



			</BodyCategory>

			<Footer></Footer>

			</div>
		
			);
	}
}


		

export default Categories;