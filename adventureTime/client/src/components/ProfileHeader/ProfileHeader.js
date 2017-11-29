import React from "react";
import "./ProfileHeader.css";

//Create the Header of our homepage as a component.
const ProfileHeader = props =>
<div className="container">
  <div className="profileHeader">
    <h1 id="profileTitle">PROFILE PAGE</h1>

    <div>
        <h2 id="profileName">{props.userName}</h2>
    </div>

  </div>
    
    <div className="row">
      <div className="col-md-8">


        <div className="blog-post">

          {/* need to get profile image working */}
          {/*<img class="thumbnail" src="http://placehold.it/500x300" />*/}
          <img id="profPic" className="thumbnail" src={props.profileImage}/>

    		<div id="aboutMe">
        			<h3>About Me</h3>
        	</div>

      		<div className="bio">	

              <p>{props.bio}</p>
          		{/*<p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>*/}
      		</div>	
        </div>

      {/* col medium 8 ending div */}
      </div>

      <div className="col-md-4">

        <div className="medium-3 columns" data-sticky-container>
        <div className="sticky" data-sticky data-anchor="content">
          
          <h4>Adventure Level</h4>

          <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar"
  			aria-valuenow={props.adventureLevel} aria-valuemin="0" aria-valuemax="100" style={{width: props.adventureLevel + "%"}}>
    		{props.adventureLevel}%
  			</div>
		  </div>

          <h4>Landscape Level</h4>

          <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
  			aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60 + "%"}}>
    		60%
  			</div>
		  </div>
			
		  <h4>Difficulty Level</h4>

		  <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"
  			aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80 + "%"}}>
    		80%
  			</div>
		  </div>

		  <h4>Fun Level</h4>

		  <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div className="progress-bar progress-bar-striped active" role="progressbar"
  			aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: 90 + "%"}}>
    		90%
  			</div>
		  </div>

		  <h4>Wicked Level</h4>

		  <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
  			aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: 95 + "%"}}>
    		95%
  			</div>
		  </div>
          
        </div>
      </div>

    {/* column ending div */}
    </div>

 {/* row ending div */}
 </div>
       
        {props.adventures.map(result =>
          <div className="blog-post">
            <h3 onClick={props.handleBlogClick(result)}>{result.adventure}<small> {result.date}</small></h3>
            <img className="thumbnail postPic" src={result.adventurePic} />
            <p>{result.description}</p>
          </div>
        )}
       
  </div>
 
export default ProfileHeader;