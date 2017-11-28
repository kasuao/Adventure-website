import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
//import the used components
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import CreateUserModal from "../../components/CreateUserModal";
import "./home.css";

class Home extends Component {
//declare and store state variables
	state = {
		createUser: 0,
		pictureToUpload: {name:"Upload Image"},
		uploadPictureData: "",
		cloudinary_url: "https://api.cloudinary.com/v1_1/copilot28/upload",

		//store the information being sent to the database here.
		firstName: "test",
		lastName: "",
		userName: "",
		email: "",
		password: "",
		profilePic: "",
		about: "",
		adventureLevel: ""
	};

	constructor(props){
		super(props)
		this.handleUserCreate = this.handleUserCreate.bind(this);
	};

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
	};
	
	//declare cloudinary information
	//const imgPreview = document.getElementById('img-preview');
	//const fileUpload = document.getElementById('file-upload');

	uploadPic = (event) => {
		const file = event.target.files[0];
		const formData = new FormData();
		const cloudinary_url = "https://api.cloudinary.com/v1_1/copilot28/upload";
		const cloudinary_upload_preset = "ugswizji";
		formData.append('file', file);
		formData.append('upload_preset', cloudinary_upload_preset);
		this.setState({
      pictureToUpload: file,
      uploadPictureData: formData
    })

	};

	/*
		This function pushes data to the server when the create user submit button is pressed.
		Prior to submitting to the database, the information being submitted will be verified to ensure it is okay to push.
	*/
  popData = () =>{
  	console.log("hits popData")
    API.saveUser({
    "firstName" : this.state.firstName,
    "lastName" : this.state.firstName,
    "userName" : this.state.userName,
    "email" : this.state.firstName,
    "password" : this.state.firstName,
    "profilePic": this.state.profilePic,
    "about" : this.state.firstName,
    "adventureLevel" : this.state.profilePic
  })
  .then(res => console.log(res))
	};

	/*
		This function will be ran whenever a value on the CreateUserModal form is changed in any way.
		This will ensure that the state variables for the entered user information is always kept up to date.
	*/
	handleFormChange = (event) =>{
		var stateObject = function() {
			let dynamicStateChange = {};
			dynamicStateChange[this.target.name] = this.target.value;
		   return dynamicStateChange;
    }.bind(event)();
		this.setState(stateObject);
	};

	/*
		This function will run whenever the "submit" button is clicked in the new user modal
		This will be a post route to send the user information to the database. 
	*/
	handleCreateSubmit = () => {

		//set temporary variables to the current state variables to be used inside the function scope.
		const tempFirst = this.state.firstName;
		const tempLast = this.state.lastName;
		const tempUserName = this.state.userName;
		const tempEmail = this.state.email;
		const tempPassword = this.state.password;
		const tempAbout = this.state.about;
		const tempAdventureLevel = this.state.adventureLevel;
    
  	//send a call to the cloudinary API to post a new user picture.
		axios({
			url: this.state.cloudinary_url,
			method: "post",
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			data: this.state.uploadPictureData
			}).then(function(res){
				console.log(res);
				//after the axios call has been made, send our data to the database.
				API.saveUser({
			    "firstName" : tempFirst,
			    "lastName" : tempLast,
			    "userName" : tempUserName,
			    "email" : tempEmail,
			    "password" : tempPassword,
			    "profilePic": res.data.secure_url,
			    "about" : tempAbout,
			    "adventureLevel" : tempAdventureLevel
			  })
				alert("submitted");
			}).catch(function(err){
				console.log(err);
				alert("error");
			});

	};

	render() {
		return (
			<div>
				<HomeHeader handleUserCreate={this.handleUserCreate}>
				</HomeHeader>
				<img id="homePic" width="100%" margin="20px" src={'Images/adventure.jpeg'} alt="Broken Image" className="img-responsive"
				style={{position:'absolute', top:'150px'}}/>
				<Footer>
				</Footer>
				{this.state.createUser ? 
						<CreateUserModal 
							handleFormChange={this.handleFormChange}
							handleCreateSubmit={this.handleCreateSubmit} 
							closeUserCreate={this.closeUserCreate} 
							pictureToUpload={this.state.pictureToUpload.name} 
							uploadPic={this.uploadPic}>
						</CreateUserModal>
				: ""}
			</div>
		);
	}
}

export default Home;