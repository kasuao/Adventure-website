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
		firstName: "",
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
		This function will run whenever the "submit" button is clicked in the new user modal
		This will be a post route to send the user information to the database. 
	*/
	handleCreateSubmit = () => {
		//populate the state variables with the entered information.
		this.setState({
      		firstName: document.getElementById("newFname").value,
			lastName: document.getElementById("newLname").value,
			userName: document.getElementById("newUserName").value,
			email: document.getElementById("newEmail").value,
			password: document.getElementById("newPassword").value,
			profilePic: "testing",
			about: document.getElementById("about").value,
			adventureLevel: document.getElementById("newAdLvl").value
    })
  	console.log("form data");

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
				//this.popData();
				alert("submitted");
			}).catch(function(err){
				console.log(err);
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