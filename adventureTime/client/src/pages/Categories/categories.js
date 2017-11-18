import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
import "./categories.css";

class Categories extends Component {
	render() {
		return(
			<div>
			<AdventureHeader tagline="I Love Adeventure"/>

			<div className="hiking">
				<h2>Hiking</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's 
					standard dummy text ever since the 1500s, when an unknown
					 printer took a galley of type and scrambled it to make a 
					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>

				<div className="mountain-biking">
				<h2> Mountain Biking</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's 
					standard dummy text ever since the 1500s, when an unknown
					 printer took a galley of type and scrambled it to make a 

					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.</p>

				</div>

				<div className="fishing">

			<h2>Fishing</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and 
					typesetting industry. Lorem Ipsum has been the industry's 
					standard dummy text ever since the 1500s, when an unknown
					 printer took a galley of type and scrambled it to make a 
					 type specimen book. It has survived not only five centuries, 
					 but also the leap into electronic typesetting, remaining 
					 essentially unchanged. It was popularised in the 1960s with
					  the release of Letraset sheets containing Lorem Ipsum 
					  passages, and more recently with desktop publishing software 
					  like Aldus PageMaker including versions of Lorem Ipsum.</p>

			</div>

			


			<Footer></Footer>
			</div>
			);
	}
}


		

export default Categories;