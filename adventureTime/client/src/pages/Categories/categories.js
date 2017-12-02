import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
import CategoryLayout from "../../components/CategoryLayout";
import BodyCategory from "../../components/BodyCategory";
import AdventureDetailModal from "../../components/AdventureDetailModal";
import "./categories.css";

class Categories extends Component {
	
	
	state = {
		// data to populate the site
	 
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
    modalUserName: ""
	};
	
	componentDidMount(){
		this.getData();
	}

	getData = event => {
    // if a category is specified...
    if (sessionStorage.getItem('category') != "") {
      // use this API.js function that filters by the category property.
      API.getAdventureCategory()
      .then(res =>{
      let tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        tempArray.push(res.data[i]);
      }
      this.setState({
        adventures: tempArray
      })
      console.log(res);
      console.log(this.state.adventures);
      console.log(this.state.adventures[0].adventure);
    })
      .catch(err => console.log(err));
    }else
		{API.getAdventures()
        .then(res =>{
          let tempArray = [];
          for (var i = 0; i < res.data.length; i++) {
            tempArray.push(res.data[i]);
          }
          this.setState({
            adventures: tempArray
          })
          console.log(res);
          console.log(this.state.adventures);
          console.log(this.state.adventures[0].adventure);
        })
          .catch(err => console.log(err));
      }
	
	}
	

	  /*
    This function will run whenever the user clicks on a post. The idea is to change a state that will
    bring up a modal of the adventure and display additional adventure information.
  */
  handleBlogClick = event => {
  	alert("worked");
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
    Set the state variables pertaining to the adventure modal.
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
      modalUserName: data.userName
    });
  };

  //When selected this function will close the adventure detail modal
  closeAdventureDetailModal = () =>{
    this.setState({
      DispAdventureModal: 0
    });
  };



	
	
	render() {
		return(
			<div>

      <Nav>
      </Nav>
	
			<AdventureHeader/>

			<CategoryLayout age="50" tagline=""
		
			/>

			<BodyCategory

			adventures={this.state.adventures}>
				



			</BodyCategory>

			<Footer></Footer>

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
          closeAdventureDetailModal={this.closeAdventureDetailModal}>
        </AdventureDetailModal>
      : ""}

			</div>
		
			);
	}
}


		

export default Categories;