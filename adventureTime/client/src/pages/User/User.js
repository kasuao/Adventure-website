import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";

import { Col, Row, Container } from "../../components/Grid";
import ProfileHeader from "../../components/ProfileHeader";
import Nav from "../../components/Nav";
import PostAdvModal from "../../components/PostAdvModal";
import AdventureDetailModal from "../../components/AdventureDetailModal";


// access the api and change the state
class User extends Component {
  // Declare and store state variables
  state = {

    createPost: 0,
    pictureToUpload: {name: "Upload Image" },
    uploadPictureData: "",
    cloudinary_url: "https://api.cloudinary.com/v1_1/copilot28/upload",

    // Store info being sent to the DB here
    adventure: "",
    difficultyLevel: "1",
    landscapeLevel: "1",
    funLevel: "1",
    enjoymentLevel: "1",
    adventurePic: "",
    description: "",
    category: "Hiking",

    // data to populate the site
    user: {},
    userName: "Jeff Loomis",
    firstName: "",
    lastName: "",
    profilePic: "",
    about: "",
    adventureLevel: "",
    adventures: [
      {
      "userName" : "",
      "adventure" : "",
      "difficultyLevel" : "",
      "landscapeLevel" : "",
      "funLevel" : "",
      "enjoymentLevel" : "",
      "adventurePic": "",
      "description" : "",
      "_id": ""
      }
    ],
    DispAdventureModal: 0,
    adventureModalData: [{}],
    
    //adventure modal information:
    modalAdventure: "",
    modalAdventurePic: "",
    modalDate: "",
    modalDescription: "",
    modalDifficultyLevel: "",
    modalFunLevel: "",
    modalLandscapeLevel: "",
    modalUserName: "",
    modalEmail: ""
  };
  /*
    This function will run whenever the component mounts to the page.
  */
  componentDidMount(){
    if(sessionStorage.getItem('loggedIn') == "false" || sessionStorage.getItem('loggedIn') == null || sessionStorage.getItem('loggedIn') == ""){
      window.location.href = '/';
    };
    this.getData();
    // this.popData();
  }

  // This function will receive user information from our database based on a unique email.
  getData = event => {
    if(sessionStorage.getItem('otherProfile') !== "" && sessionStorage.getItem('otherProfile') !== null){
      API.getUser(sessionStorage.getItem('otherProfile'))
        .then(res =>{ this.setState({ 
            userName: res.data.userName,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            profilePic: res.data.profilePic,
            about: res.data.about,
            adventureLevel: res.data.adventureLevel
          })
        console.log(res);
        })
        .catch(err => console.log(err));
      } else {
      API.getUser(sessionStorage.getItem('email'))
        .then(res =>{ this.setState({ 
            userName: res.data.userName,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            profilePic: res.data.profilePic,
            about: res.data.about,
            adventureLevel: res.data.adventureLevel
          })
        console.log(res);
        })
        .catch(err => console.log(err));
      }
    API.getAdventures()
    .then(res =>{ 
      let tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        if(res.data[i].userName === sessionStorage.getItem('userName')){
          tempArray.push(res.data[i]);
        }
      }
      this.setState({ 
        adventures: tempArray
      })

      console.log(res);
      console.log(this.state.adventures);
      console.log(this.state.adventures[0].adventure);
      })
      .catch(err => console.log(err));

  };

// Come back here. This is what makes the modal come alive

/*
this function will run when the "Create a Post" link is clicked by the user.
when this is clicked it will set a state variable to 1. when this state variable is 1,
there will be a modal popup prompting the user to post their adventure.
*/

  handlePostCreate = () => {
    this.setState({
      createPost: true
    })
    
  };

/*
this function will run whenever the "close" button is clicked in the the "Create New Post" modal.
what this function does is set the createPost state to false. Meaning, whenever the page renders,
the new post modal will not pop up (close the window).
*/  
  closePostCreate = () => {
    this.setState({
      createPost: false
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
  This function will be ran whenever a value on the CreatePostModalform is changed in any way.
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
    //this should all be handled by state variables, but due to a time crunch we went with session variables to avoid redux. Future iterations should use Redux however.
    const tempUserName = sessionStorage.getItem('userName');
    const tempEmail = sessionStorage.getItem('email');
    const tempAdventure = this.state.adventure;
    const tempCategory = this.state.category;
    const tempDifficultyLevel = this.state.difficultyLevel * 10;
    const tempLandscapeLevel = this.state.landscapeLevel * 10;
    const tempFunLevel = this.state.funLevel * 10;
    const tempEnjoymentLevel = this.state.enjoymentLevel * 10;
    const tempDescription = this.state.description;

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
        API.saveAdventure({
          "userName" : tempUserName,
          "email" : tempEmail,
          "adventure" : tempAdventure,
          "category" : tempCategory,
          "difficultyLevel" : tempDifficultyLevel,
          "landscapeLevel" : tempLandscapeLevel,
          "funLevel" : tempFunLevel,
          "enjoymentLevel" : tempEnjoymentLevel,
          "adventurePic": "https://res.cloudinary.com/copilot28/image/upload/a_exif/" + res.data.public_id + ".jpeg",
          "description" : tempDescription
        })
        console.log("submitted");
        window.location.reload();
      }).catch(function(err){
        console.log("Error:");
        console.log(err);
      });

  };


  /*
    This function will run whenever the user clicks on a post. The idea is to change a state that will
    bring up a modal of the adventure and display additional adventure information.
  */
  handleBlogClick = event => {
    let id = event.target.getAttribute("name");
    console.log(event.target.getAttribute("name"));
    this.setState({
      DispAdventureModal: 1
    });
    //make a call to the database to recieve the adventures.
      API.getAdventures()
        .then(res => {
          for (var i = 0; i < res.data.length; i++) {
            //if our clicked post's id matches one in the database, trigger a function to populate the state variables.
            if(res.data[i]._id == id){
              return this.modalData(res.data[i]);
            }
          }
          //this.setState({ adventureModalData: res.data })
          
        })
        .catch(err => console.log(err));
    };

  /*
    Set the state variables pertaining to the adventure modal currently being selected.
  */
  modalData = data => {
    this.setState({
      modalAdventure: data.adventure,
      modalAdventurePic: data.adventurePic,
      modalDate: data.date,
      modalDescription: data.description,
      modalDifficultyLevel: data.difficultyLevel,
      modalFunLevel: data.funLevel,
      modalLandscapeLevel: data.landscapeLevel,
      modalUserName: data.userName,
      modalEmail: data.email
    });
  };

  //When selected this function will close the adventure detail modal
  closeAdventureDetailModal = () =>{
    this.setState({
      DispAdventureModal: 0
    });
  };

  //Save to a session variable a different profile the user wants to view.
  loadOtherProfile = (event) => {
    //sessionStorage.setItem('otherProfile', event.target.getAttribute("name"));
    //console.log(event.target.getAttribute("name"));
    //window.location.href = '/user/';
  }

  handleCategoryRedirect = () => {
    sessionStorage.setItem('otherProfile', this.state.modalEmail);
    sessionStorage.setItem('category', "");
    window.location.href = '/categories/';
  }

  //redirect to the user page. ensure that the 'view other user' session variable is left unmarked.
  handleProfileRedirect = () => {
    sessionStorage.setItem('otherProfile', "");
    window.location.href = '/User/';
  };

/*
modalAdventure: "",
    modalAdventurePic: "",
    modalDate: "",
    modalDescription: "",
    modalDifficultyLevel: "",
    modalFunLevel: "",
    modalLandscapeLevel: "",
    modalUserName: ""
*/
  
  render() {
    return (

      <div>
        <Nav
          handlePostCreate={this.handlePostCreate}
          handleCategoryRedirect = {this.handleCategoryRedirect}
          handleProfileRedirect = {this.handleProfileRedirect}>
        
        </Nav>
        {/*Create a conditional to determine if the user is viewing their profile or somebody elses*/}
        
        <ProfileHeader
          userName={this.state.userName}
          /*profileName={this.state.profileImage}*/
          profileImage={this.state.profilePic}
          bio={this.state.about}
          adventureLevel={this.state.adventureLevel}
          adventures={this.state.adventures}
          handleBlogClick={this.handleBlogClick}
          >
        </ProfileHeader>
        
        {this.state.createPost ? 
          <PostAdvModal 
            handleFormChange={this.handleFormChange}
            handleCreateSubmit={this.handleCreateSubmit} 
            closePostCreate={this.closePostCreate} 
            pictureToUpload={this.state.pictureToUpload.name} 
            uploadPic={this.uploadPic}>
          </PostAdvModal>
        : ""}

        {this.state.DispAdventureModal ? 
          <AdventureDetailModal 
            modalUserName={this.state.modalUserName}
            modalAdventurePic={this.state.modalAdventurePic}
            modalLandscapeLevel={this.state.modalLandscapeLevel}
            modalFunLevel={this.state.modalFunLevel}
            modalDifficultyLevel={this.state.modalDifficultyLevel}
            modalAdventure={this.state.modalAdventure}
            modalDescription={this.state.modalDescription}
            modalDate={this.state.modalDate}
            closeAdventureDetailModal={this.closeAdventureDetailModal}
            loadOtherProfile={this.loadOtherProfile}>
          </AdventureDetailModal>
        : ""}

      </div>

    /* og user.js html 

      <Container fluid>
        <div>
            <h2>{this.state.user.firstName}</h2>
            <h1>{this.state.user.lastName}</h1>
            <h2>Login: </h2>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.password}</p>
            <h2>About: </h2>
            <p>{this.state.user.about}</p>
            <h2>Adventure Level: </h2>
            <p>{this.state.user.adventureLevel}</p>
            <h2>Adventures:</h2>

        </div>
      </Container>

    og user.js html */

    );
  }
}

export default User;