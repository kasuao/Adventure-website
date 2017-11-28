import React from "react";
import "./ProfileHeader.css";

//Create the Header of our homepage as a component.
const ProfileHeader = props =>
<div class="container">
  <div className="profileHeader">
    <h1 id="profileTitle">PROFILE PAGE</h1>

    <div>
        <h2 id="profileName">{props.userName}</h2>
    </div>

  </div>
    
    <div class="row">
      <div class="col-md-8">


        <div class="blog-post">

          {/* need to get profile image working */}
          {/*<img class="thumbnail" src="http://placehold.it/500x300" />*/}
          <img id="profilePic"class="thumbnail" src={props.profileImage}/>

    		<div id="aboutMe">
        			<h3>About Me</h3>
        	</div>

      		<div class="bio">	

              <p>{props.bio}</p>
          		{/*<p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>*/}
      		</div>	
        </div>

      {/* col medium 8 ending div */}
      </div>

      <div id="rating"class="col-md-4">

        <div class="medium-3 columns" data-sticky-container>
        <div class="sticky" data-sticky data-anchor="content">
          
          <h4>Adventure Level</h4>

          <div class="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar"
  			aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: 40 + "%"}}>
    		40%
  			</div>
		  </div>

          <h4>Landscape Level</h4>

          <div class="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"
  			aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 60 + "%"}}>
    		60%
  			</div>
		  </div>
			
		  <h4>Difficulty Level</h4>

		  <div class="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar"
  			aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: 80 + "%"}}>
    		80%
  			</div>
		  </div>

		  <h4>Fun Level</h4>

		  <div class="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div class="progress-bar progress-bar-striped active" role="progressbar"
  			aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: 90 + "%"}}>
    		90%
  			</div>
		  </div>

		  <h4>Wicked Level</h4>

		  <div class="progress" style={{width: 250 + "px", height: 25 + "px"}}>
  			<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar"
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

        <div id="blogging" class="blog-post">
          <h3>Awesome blog post title <small>3/6/2015</small></h3>
          <img class="thumbnail" src="Images/fishing.jpeg" />
          <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
        </div>

        <div class="blog-post">
          <h3>Awesome blog post title <small>3/6/2015</small></h3>
          <img class="thumbnail" src="Images/lakeBlanche.jpeg" />
          <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
        </div>

        <div class="blog-post">
          <h3>Awesome blog post title <small>3/6/2015</small></h3>
          <img class="thumbnail" src="Images/mountainbiking.jpeg" />
          <p>Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus.</p>
        </div>

        </div>

export default ProfileHeader;