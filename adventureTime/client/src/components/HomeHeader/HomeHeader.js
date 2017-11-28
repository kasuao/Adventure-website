import React from "react";
import "./HomeHeader.css";

//Create the Header of our homepage as a component.
const HomeHeader = props =>
  <div className="homeHeader">
    <h1 id="siteTitle">ADVENTURE AWAITS</h1>
    	<div className="row">
				<div id="loginEmail" className="input-field col s3">
				  <label>
				    email:
				    <input type="email" name="email" id="inputEmail" />
				  </label>
				</div>
				<div id="loginPassword" className="input-field col s3">
				  <label>
				    password:
				    <input type="password" name="password" id="inputPassword" />
				  </label>
				</div>
			</div>
		<div>
			<p onClick={props.handleUserCreate} id="create">Create an Account</p>
		</div>
		<button id="loginSubmit" value="Login" onClick={props.handleUserLogin}>Login</button>
  </div>;

export default HomeHeader;