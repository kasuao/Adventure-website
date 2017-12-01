import React from "react";
import "./HomeHeader.css";

//Create the Header of our homepage as a component.
const HomeHeader = props =>
  <div className="homeHeader">

	  <div className="left-header-col">
	    <h1 id="siteTitle">ADVENTURE AWAITS</h1>
	    <h2> What is life, but one grand adventure</h2>
	    <span class="glyphicons glyphicons-tree-conifer"></span>
	  </div>
	  <div className="right-header-col">
	    <form className="form-container">
				<div id="loginEmail" className="input-field col s3">
				  <label for="login-email"> email:</label>
				  <input type="email" name="email" id="inputEmail"/>
				</div>
				<div id="loginPassword" className="input-field col s3">
				  <label for="password-login">password:</label>
				  <input type="password" name="password" id="inputPassword" />
				</div>
			</form>
			<div className="submit-button">
				<button id="loginSubmit" value="Login" onClick={props.handleUserLogin}>Login</button>
			</div>
			<div className="bottom-header">
					<p onClick={props.handleUserCreate} id="create">Create an Account</p>
			</div>
		</div>
		
  </div>;

export default HomeHeader;