import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import ProfileHeader from "../../components/ProfileHeader";
import Nav from "../../components/Nav";


class User extends Component {
  state = {
    user: {},
    userName: "Jeff Loomis",
    profileImage: "http://www.quistic.com/wp-content/uploads/2014/11/quistic-Large-Course-Images-500-x-300.jpg",
    bio: "Adventure is all about taking each experience, regardless if you know the outcome or not and facing it head on. It is about seeing the world from a different perspective, even if you’ve seen it a million times before. It is choosing to see the beauty from the ordinary and finding ways on how to do it differently."

    // Need to get profile image working..
    //profileName: "./giraffe_profile.png"
  };

  componentDidMount(){
    this.getData();
    // this.popData();
  }

  // this function pushes data to the server. 
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



getData = event => {
    API.getUser("laracroft@tombraider.com")
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  
  render() {
    return (

      <div>

        <Nav>
        
        </Nav>

        <ProfileHeader
          userName={this.state.userName}
          /*profileName={this.state.profileImage}*/
          profileImage={this.state.profileImage}
          bio={this.state.bio}
          >
        </ProfileHeader>

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