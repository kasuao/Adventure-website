import React from "react";
import "./HomeHeader.css";

//Create the Header of our homepage as a component.
const HomeHeader = props =>
  <div className="homeHeader">

	  <div className="left-header-col">
	    <h1 id="siteTitle">ADVENTURE AWAITS</h1>
	  </div>
	  <div className="right-header-col">
	    <form className="col s12">
	    	<div>
					<div id="loginEmail" className="input-field col s3">
					  <label for="login-email"> email:</label>
					    <input type="email" name="email" />
					</div>
					<div id="loginPassword" className="input-field col s3">
					  <label for="password-login">password:</label>
					  <input type="password" name="password" id="password-login" />
					</div>
				</div>
				
				
			
			
			</form>
		</div>
		<div className="bottom-header">
					<p onClick={props.handleUserCreate} id="create">Create an Account</p>
				</div>
				<div className="submit-button">
		<button id="loginSubmit" value="Login" onClick={props.handleUserLogin}>Login</button>
	</div>
  </div>;

export default HomeHeader;