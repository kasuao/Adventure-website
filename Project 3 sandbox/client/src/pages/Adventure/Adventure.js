import React, { Component } from "react";

import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Adventure extends Component {
  state = {
    user: "Kelcey A.", //TODO I don't know if this is right...do I set the value as an object?
    title: "Nebo Loop",
    description: "A fun family hike",
    directions: "that way",
    location: "Somewhere",
    category: "Hiking",
    funRating: 5,
    diffRating: 3
  };

  
  render() {
    return (
      <Container fluid>
        <h1>{this.state.category}</h1>
        <h1>{this.state.title}</h1>
        <h2>Description: </h2>
        <p>{this.state.description}</p>
        <h2>Directions: </h2>
        <p>{this.state.directions}</p>
        <h2>Location: </h2>
        <p>{this.state.location}</p>
        <h2>Description: </h2>
        <p>{this.state.description}</p>
        <h4>Fun Rating: {this.state.funRating}</h4>
        <h4>Difficulty Rating: {this.state.diffRating}</h4>
      </Container>
    );
  }
}

export default Adventure;
