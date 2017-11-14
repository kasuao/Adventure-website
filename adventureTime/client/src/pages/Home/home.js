import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import the used components
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";

class Home extends Component {
	constructor(props){
		super(props)
		this.handleUserCreate = this.handleUserCreate.bind(this);
	}

	handleUserCreate = () => {
		alert("Clicked");
	};

	render() {
		return (
			<div>
				<HomeHeader handleUserCreate={this.handleUserCreate}>
				</HomeHeader>
				<img id="homePic" width="100%" src={'Images/adventure.jpeg'} alt="Broken Image" className="img-responsive"
				style={{position:'absolute', top:'150px'}}/>
				<Footer>
				</Footer>
			</div>
		);
	}
}

export default Home;