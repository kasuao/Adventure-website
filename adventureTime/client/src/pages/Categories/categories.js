import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";

import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AdventureHeader from "../../components/AdventureHeader";
// import CategoryLayout from "../../components/CategoryLayout";
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
    modalUserName: "",
    modalEmail: ""
	};
	
	componentDidMount(){
		this.getData();
	}

	getData = event => {
    console.log(sessionStorage.getItem('category'));
    // if a category is specified...
    if (sessionStorage.getItem('category') !== null && sessionStorage.getItem('category') !== "") {
      // use this API.js function that filters by the category property.
      API.getAdventures()
    .then(res =>{ 
      let tempArray = [];
      for (var i = 0; i < res.data.length; i++) {
        if(res.data[i].category === sessionStorage.getItem('category')){
          tempArray.push(res.data[i]);
        }
      }
      console.log(tempArray);
      this.setState({ 
        adventures: tempArray
      })
      
      console.log(res);
      console.log(this.state.adventures);
      console.log(this.state.adventures[0].adventure);
      })
      .catch(err => console.log(err));
    }else{
      API.getAdventures()
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
    let id = event.target.getAttribute("name");
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
    console.log(data);
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

  //visit another users profile page when the username is selected in the modal view.
  loadOtherProfile = (event) => {
    sessionStorage.setItem('otherProfile', this.state.modalEmail);
    window.location.href = '/user/';
  };

  handleCategoryRedirect = () => {
    sessionStorage.setItem('category', "");
    window.location.href = '/categories/';
  }

  handleProfileRedirect = () => {
    sessionStorage.setItem('otherProfile', "");
    window.location.href = '/user/';
  }
	
	
	render() {
		return(
			<div>

      <Nav 
        handleCategoryRedirect = {this.handleCategoryRedirect}
        handleProfileRedirect = {this.handleProfileRedirect}>
      </Nav>
	
			<AdventureHeader>
      </AdventureHeader>

		

			<BodyCategory
        handleBlogClick={this.handleBlogClick}
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
          closeAdventureDetailModal={this.closeAdventureDetailModal}
          loadOtherProfile={this.loadOtherProfile}>
        </AdventureDetailModal>
      : ""}

			</div>
		
			);
	}
}


		

export default Categories;