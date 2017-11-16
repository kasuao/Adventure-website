import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import the used components
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import CreateUserModal from "../../components/CreateUserModal";
import "./home.css";

class Home extends Component {
//declare and store state variables
	state = {
		createUser: 0
	};

	constructor(props){
		super(props)
		this.handleUserCreate = this.handleUserCreate.bind(this);
	}

	/*this function will run when the "Create an Account" text is clicked by the user.
		when this is clicked it will set a state variable to 1. when this state variable is 1,
		there will be a modal popup prompting the user to sign up for the site.
	*/
	handleUserCreate = () => {
		this.setState({
      createUser: true
    })
	};

	/*this function will run whenever the "close" button is clicked in the the "Create New User" modal.
		what this function does is set the createUser state to false. Meaning, whenever the page renders,
		the new user modal will not pop up (close the window).
	*/	
	closeUserCreate = () => {
		this.setState({
      createUser: false
    })
	}

	/*
		This function will run whenever the "submit" button is clicked in the new user modal
		This will be a post route to send the user information to the database. 
	*/
	handleCreateSubmit = () => {
		alert("submitted");
	}

	render() {
		return (
			<div>
			
				<HomeHeader handleUserCreate={this.handleUserCreate}>
				</HomeHeader>
				<img id="homePic" width="100%" margin="20px" src={'Images/adventure.jpeg'} alt="Broken Image" className="img-responsive"
				style={{position:'absolute', top:'150px'}}/>
				<Footer>
				</Footer>
				{this.state.createUser ? <CreateUserModal handleCreateSubmit={this.handleCreateSubmit} closeUserCreate={this.closeUserCreate}>
					</CreateUserModal>
				 : ""}
			</div>
		);
	}
}

export default Home;