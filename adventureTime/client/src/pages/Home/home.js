import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";
//import the used components
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import CreateUserModal from "../../components/CreateUserModal";
import "./home.css";

class Home extends Component {
//declare and store state variables, organize to use global state
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
		password2: "",
		profilePic: "",
		about: "",
		adventureLevel: ""
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
	/*
		This funtion will set the file information that the user wants to upload to state variables
		for use when the user selects the submit button.
	*/
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

		/*
			Verify user information:
			- Passwords must match.
			- *possible: passwords must contain a uppercase, lowercase, special character, and number.
			- The userName cannot match another users.
			- The email address cannot match another users.
		*/
		let verifyMsg = "";
		API.getUsers()
      .then(res => {
      	//verify that we have a unique user
      	for (var i = 0; i < res.data.length; i++) {
      		if(res.data[i].userName === this.state.userName){
      			verifyMsg = `${verifyMsg} The selected Username is already in use. `;
      			console.log("duplicate username at " + i);
      		};
      		if(res.data[i].email === this.state.email){
      			verifyMsg = `${verifyMsg} The entered Email is already in use. `;
      			console.log("duplicate email at " + i);
      		};
      	}
      	if(this.state.password !== this.state.password2){
					verifyMsg = verifyMsg + "The passwords do not match.";
				};
				//Only move forward if the verification process passes. 
				if(verifyMsg !== ""){
					alert(verifyMsg);
				}else{
					//set temporary variables to the current state variables to be used inside the axios function scope.
					const tempFirst = this.state.firstName;
					const tempLast = this.state.lastName;
					const tempUserName = this.state.userName;
					const tempEmail = this.state.email;
					const tempPassword = this.state.password;
					const tempAbout = this.state.about;
					const tempAdventureLevel = this.state.adventureLevel * 10;


			  	//send a call to the cloudinary API to post a new user picture to the cloud database.
					axios({
						url: this.state.cloudinary_url,
						method: "post",
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						data: this.state.uploadPictureData
					}).then(function(res){
						console.log(res);

						//set up session variables to save the unique username and information to be used throughout the application.
						//We are using javascript to set session variables. Ideally this would be done with Redux, but due to time constraints this is the route we decided to use.

						//after the axios call has been made, send our data to the database.
						API.saveUser({
					    "firstName" : tempFirst,
					    "lastName" : tempLast,
					    "userName" : tempUserName,
					    "email" : tempEmail,
					    "password" : tempPassword,
					    "profilePic": "https://res.cloudinary.com/copilot28/image/upload/a_exif/" + res.data.public_id + ".jpeg",
					    // "profilePic": res.data.secure_url,

					    // https://res.cloudinary.com/copilot28/image/upload/a_exif/v1512000198/pr9b3zqdyxfifsiffur6.jpg
					    "about" : tempAbout,
					    "adventureLevel" : tempAdventureLevel
					  })
					  //set session variables to store user information throughout the session. should be replaced with Redux in future iterations. 
						sessionStorage.setItem('userName', tempUserName);
						sessionStorage.setItem('loggedIn', "true");
						sessionStorage.setItem('firstName', tempFirst);
						sessionStorage.setItem('lastName', tempLast);
						sessionStorage.setItem('email', tempEmail);
						sessionStorage.setItem('profilePic', res.data.secure_url);
						sessionStorage.setItem('about', tempAbout);
						sessionStorage.setItem('adventureLevel', tempAdventureLevel);
						sessionStorage.setItem('viewOtherUser', 0);
						sessionStorage.setItem('otherProfile', "");
						//set a timout function to ensure the program has finished before moving forward to the next page.
					  if(sessionStorage.getItem('loggedIn') == "true"){
			    		setTimeout(function(){
					    	window.location.href = '/user';
							}, 1000);
					  }
					}).catch(function(err){
						console.log(err);
						sessionStorage.setItem('userName', "");
						sessionStorage.setItem('loggedIn', "false");
					});
				};
      })
      .catch(function(err)  {
      	sessionStorage.setItem('userName', "");
				sessionStorage.setItem('loggedIn', "false");
				alert("error");
      	console.log(err);
    	});


    	//set a timout function to ensure the program has finished before moving forward to the next page.
    	setTimeout(function(){
		    if(sessionStorage.getItem('loggedIn') == "true"){
		    	window.location.href = '/user';
		    }
			}, 1000);

	};

	/*
		This function will determine what happens when the Login button is clicked This will verify that something is entered 
		into the email and password fields and check the database to verify the information matches a unique user in our system.
		If the information is correct, update the global state variables with the user information to be used on other pages.
	*/
	handleUserLogin = () => {
		// alert("hey");
		API.getUser(document.getElementById("inputEmail").value)
		.then(function(res) {
			console.log(res);
			
			if(res.data){
				if(res.data.email === document.getElementById("inputEmail").value && res.data.password === document.getElementById("inputPassword").value){
						//set up session variables to save the unique username and user information to be used throughout the application.
						//We are using javascript to set session variables. Ideally this would be done with Redux, but due to time constraints this is the route we decided to use.
						sessionStorage.setItem('userName', res.data.userName);
						sessionStorage.setItem('loggedIn', "true");
						sessionStorage.setItem('firstName', res.data.firstName);
						sessionStorage.setItem('lastName', res.data.lastName);
						sessionStorage.setItem('email', res.data.email);
						sessionStorage.setItem('profilePic', res.data.profilePic);
						sessionStorage.setItem('about', res.data.about);
						sessionStorage.setItem('adventureLevel', res.data.adventureLevel);

				}else{
					sessionStorage.setItem('email', "");
					sessionStorage.setItem('loggedIn', "false");
					alert("Invalid email or password.");
				}
			}else {
				sessionStorage.setItem('email', "");
				sessionStorage.setItem('loggedIn', "false");
				alert("Invalid email or password.");
			}
		})
		.catch(function(err){
			sessionStorage.setItem('email', "");
			sessionStorage.setItem('loggedIn', "false");
			alert("Invalid email or password catch.");
		});
		setTimeout(function(){
	    if(sessionStorage.getItem('loggedIn') == "true"){
	    	window.location.href = '/user';
	    }
		}, 1000);
	};

	// loadHiking function will load only the hiking posts of a category.
	loadHiking = () => {
		// alert("click is working");
		sessionStorage.setItem('category', "Hiking");
		window.location.href = '/categories/';

	};

	loadFishing = () => {
		// alert("click is working");
		sessionStorage.setItem('category', "Fishing");
		window.location.href = '/categories/';

	};

	loadBiking = () => {
		// alert("click is working");
		sessionStorage.setItem('category', "Biking");
		window.location.href = '/categories/';

	};

	//redirect to the category page and set our category session storage to blank
	handleCategoryRedirect = () => {
		sessionStorage.setItem('category', "");
		window.location.href = '/categories/';
	}

	//always set our logged in state variables to our session variable
	render() {
		return (
			<div>
				<Nav
					handleCategoryRedirect={this.handleCategoryRedirect}>
				</Nav>

				<HomeHeader 
					handleUserCreate={this.handleUserCreate} 
					handleUserLogin={this.handleUserLogin.bind(this)}
					changeGlobalState={this.props.changeGlobalState}>
				</HomeHeader>
				<img id="homePic" width="100%" margin="20px" src={'Images/adventure.jpeg'} alt="Broken Image" className="img-responsive"
				/>
				<div className="quotes"><h2>Adventure is worth while itself</h2>
				</div>
				<div class="img-container">
					<img onClick={this.loadHiking} width="300px" margin="100px" height="250px" src={'Images/hiking2.jpeg'} alt="hiking pic" className="img-responsive"/>
					<img onClick={this.loadFishing} width="300px" margin="100px" height="250px" src={'Images/fishing.jpeg'} alt="hiking pic" className="img-responsive"/>
					<img onClick={this.loadBiking} width="300px" margin="100px" height="250px" src={'Images/mountainbiking.jpeg'} alt="hiking pic" className="img-responsive"/>
				</div>
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