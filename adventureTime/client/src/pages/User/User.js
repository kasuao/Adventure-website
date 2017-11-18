import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class User extends Component {
  state = {
    user: {},
  };

  componentDidMount(){
    this.getData();
    this.popData();
  }

  // this function pushes data to the server. 
  popData = test =>{
    API.saveUser({
    "firstName": "TST", 
    "lastName": "Nebo",
    "email": "A TSTfun family hike",
    "password": "thatwTSTay",
    "about": "SomewherTSTe",
    "adventureLevel": "10",
    })
    .then(res => console.log(res))
  }


getData = event => {
    API.getUser("5a0d0ee5a049231578966062")
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  };

  
  render() {
    return (
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
    );
  }
}

export default User;