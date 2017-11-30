import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";

import { Col, Row, Container } from "../../components/Grid";
import ProfileHeader from "../../components/ProfileHeader";
import Nav from "../../components/Nav";
import PostAdvModal from "../../components/PostAdvModal";

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
    difficultyLevel: "",
    landscapeLevel: "",
    funLevel: "",
    adventurePic: "",
    description: "",

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
      "adventurePic": "",
      "description" : "",
      "_id": ""
      }
    ],

    profileImage: "http://www.quistic.com/wp-content/uploads/2014/11/quistic-Large-Course-Images-500-x-300.jpg",
    bio: "Adventure is all about taking each experience, regardless if you know the outcome or not and facing it head on. It is about seeing the world from a different perspective, even if you’ve seen it a million times before. It is choosing to see the beauty from the ordinary and finding ways on how to do it differently."

  };
  /*
    This function will run whenever the component mounts to the page.
  */
  componentDidMount(){
    this.getData();
    // this.popData();
  }

  // This function will receive user information from our database based on a unique email.
  getData = event => {
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
    const tempAdventure = this.state.adventure;
    const tempDifficultyLevel = this.state.difficultyLevel * 10;
    const tempLandscapeLevel = this.state.landscapeLevel * 10;
    const tempFunLevel = this.state.funLevel * 10;
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
          "adventure" : tempAdventure,
          "difficultyLevel" : tempDifficultyLevel,
          "landscapeLevel" : tempLandscapeLevel,
          "funLevel" : tempFunLevel,
          "adventurePic": "https://res.cloudinary.com/copilot28/image/upload/a_exif/" + res.data.public_id + ".jpeg",
          "description" : tempDescription,
        })
        console.log("submitted");
        this.closePostCreate();
      }).catch(function(err){
        console.log("Error:");
        console.log(err);
      });

  };

  handleBlogClick = () => {
    //alert("clicked");
  };

    // // this function pushes data to the server. 
    // popData = test =>{
    //   API.saveUser({
    //   "firstName" : "Lara",
    //   "lastName" : "Croft",
    //   "email" : "laracroft@tombraider.com",
    //   "password" : "password",
    //   "about" : "she is a woman who travels the world in search of forgotten artifacts and locations, frequently connected to supernatural powers.She is the only daughter and heir of the aristocratic Croft family. She is intelligent, athletic, elegant, fluent in multiple languages, and determined to fulfill her own goals at any cost. She has brown eyes and brown hair mostly worn in a braid or ponytail. ",
    //   "adventureLevel" : 10
    //   })
    //   .then(res => console.log(res))
    // }



  
  render() {
    return (

      <div>

        <Nav
          handlePostCreate={this.handlePostCreate}>
        
        </Nav>
        {/*Create a conditional to determine if the user is viewing their profile or somebody elses*/}
        {sessionStorage.getItem('viewOtherUser') ?
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
        :
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
        }
        {this.state.createPost ? 
          <PostAdvModal 
            handleFormChange={this.handleFormChange}
            handleCreateSubmit={this.handleCreateSubmit} 
            closePostCreate={this.closePostCreate} 
            pictureToUpload={this.state.pictureToUpload.name} 
            uploadPic={this.uploadPic}>
          </PostAdvModal>
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