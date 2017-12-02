import React from "react";
import "./AdventureDetailModal.css";

const AdventureDetailModal = props =>

  <div className="adventureDetailModal">
    <div id="adventureDisplay" className="container">

    	<div className="row">
    		<div className="col-md-10">
					<h2 className="left" id="modalUserName" name={props.modalEmail} onClick={props.loadOtherProfile}>{props.modalUserName}</h2>
				</div>
				<div className="col-md-2">
					<div><span className='right' id='closeModal' onClick={props.closeAdventureDetailModal}>Close</span></div>
				</div>
			</div>

			<div id="blogPostTitle"className="row center">
				<p id="adventureDetailTitle">{props.modalAdventure}</p>
			</div>

			<div className="row">
	    	<div className="col-md-7">
					<img id= "postBlogPic"className="thumbnail" src={props.modalAdventurePic} width='100%' mode='fit'/>
				</div>
				<div className="col-md-5">
					<h4>Landscape Level</h4>
		      <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
		  			<div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
		  			aria-valuenow={props.modalLandscapeLevel} aria-valuemin="0" aria-valuemax="100" style={{width: props.modalLandscapeLevel + "%"}}>
		    		{props.modalLandscapeLevel}%
		  			</div>
				  </div>
				  <h4>Fun Level</h4>
		      <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
		  			<div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
		  			aria-valuenow={props.modalFunLevel} aria-valuemin="0" aria-valuemax="100" style={{width: props.modalFunLevel + "%"}}>
		    		{props.modalFunLevel}%
		  			</div>
				  </div>
					<h4>Difficulty Level</h4>
		      <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
		  			<div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"
		  			aria-valuenow={props.modalDifficultyLevel} aria-valuemin="0" aria-valuemax="100" style={{width: props.modalDifficultyLevel + "%"}}>
		    		{props.modalDifficultyLevel}%
		  			</div>
				  </div>
				</div>
			</div>

			<div className="row">
				<p className="center" id="adventureDate">
					{props.modalDate.substring(0,10)}
				</p>
			</div>

			<div className="row">
				<div className="col-md-1">
				</div>
				<div className="col-md-10">
					<p id="adventureDetailInfo">
						{props.modalDescription}
					</p>
				</div>
				<div className="col-md-1">
				</div>
			</div>

		</div>
  </div>; 

export default AdventureDetailModal;