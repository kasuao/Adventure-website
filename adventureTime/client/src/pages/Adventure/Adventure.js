import React, { Component } from "react";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

class Adventure extends Component {
  state = {
    adventure: {},
  };

  componentDidMount() {
    this.getData();
  }

  getData = event => {
    API.getAdventure(FIX-ME-id)
      .then(res => this.setState({ adventure: res.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <Container fluid>
        <div>
          <h1>{this.state.adventure.category}</h1>
          <h1>{this.state.adventure.title}</h1>
          <h2>Description: </h2>
          <p>{this.state.adventure.description}</p>
          <h2>Directions: </h2>
          <p>{this.state.adventure.directions}</p>
          <h2>Location: </h2>
          <p>{this.state.adventure.location}</p>
          <h4>Fun Rating: {this.state.adventure.funRating}</h4>
          <h4>Difficulty Rating: {this.state.adventure.diffRating}</h4>
        </div>
      </Container>
    );
  }
}

export default Adventure;
