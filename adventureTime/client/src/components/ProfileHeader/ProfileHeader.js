import React from "react";
import "./ProfileHeader.css";

//Create the Header of our homepage as a component.
const ProfileHeader = props =>
<div id="background-container" className="container">

  <div className="profileHeader">
    <h1 id="profileTitle">PROFILE</h1>

    <div>
        <h2 id="profileName">{props.userName}</h2>
    </div>

  </div>
    
    <div id="profile-info"className="row">
      <div className="col-md-8">


        <div className="blog-post">

          {/* need to get profile image working */}
          {/*<img class="thumbnail" src="http://placehold.it/500x300" />*/}
          <img id="profPic" className="thumbnail" src={props.profileImage}/>

    		<div id="aboutMe">
        			<h3>About Me</h3>
              <p>{props.bio}</p>
        	</div>

      		<div className="bio">	

            
          		{/*<p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>*/}
      		</div>	
           <div id="rating"className="col-md-4">

        <div className="medium-3 columns" data-sticky-container>
        <div className="sticky" data-sticky data-anchor="content">
          
          <h4>Adventure Level</h4>

          <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
        <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar"
        aria-valuenow={props.adventureLevel} aria-valuemin="0" aria-valuemax="100" style={{width: props.adventureLevel + "%"}}>
        {props.adventureLevel}%
        </div>
      </div>

        </div>

      {/* col medium 8 ending div */}
      </div>

        </div>
      </div>

    {/* column ending div */}
    </div>

 {/* row ending div */}
 </div>
       {/*conflict with master here: <div id="blogging" class="blog-post">*/}
        {props.adventures.map(result =>
          <div className="row">
            <div className="blog-post thumbnail">
              <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-8">
                  <h3 className="postTitle" name={result._id} onClick={props.handleBlogClick}>{result.adventure}</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-10 center">
                  <img className="postPic" src={result.adventurePic} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-5">
                  <h4>Overall Enjoyment</h4>
                </div>
                <div className="col-md-3">
                  <div className="progress" style={{width: 250 + "px", height: 25 + "px"}}>
                    <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
                    aria-valuenow={result.enjoymentLevel} aria-valuemin="0" aria-valuemax="100" style={{width: result.enjoymentLevel + "%"}}>
                    {result.enjoymentLevel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
       
  </div>
 
export default ProfileHeader;