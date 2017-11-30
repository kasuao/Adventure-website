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
					    <input type="email" name="email" id="inputEmail"/>
					</div>
					<div id="loginPassword" className="input-field col s3">
					  <label for="password-login">password:</label>
					  <input type="password" name="password" id="inputPassword" />
					</div>
				</div>
				<div className="bottom-header">
					<p onClick={props.handleUserCreate} id="create">Create an Account</p>
				</div>
				<div className="submit-button">
				<input id="loginSubmit" type="submit" value="Login" />
				</div>
			</form>
		</div>
		<button id="loginSubmit" value="Login" onClick={props.handleUserLogin}>Login</button>

  </div>;

export default HomeHeader;