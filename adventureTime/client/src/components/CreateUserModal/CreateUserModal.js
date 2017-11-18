import React from "react";
import "./CreateUserModal.css";

const CreateUserModal = props =>
  <div className="createUserModal">
    <div id="createUser" className="center displayLogin">
			<h2 className="center" id="createUserPrompt">Enter all user information.</h2>
			First Name: <input className="center" id="newFname" type="text" name="fname"/>
			Last Name: <input className="center" id="newLname" type="text" name="lname"/>
			Email: <input className='center' id='newEmail' type='text' name='email'/>
			Password: <input className='center' id='newPassword' type='password' name='password'/>
			Confirm Password: <input className='center' id='newPassword2' type='password' name='password2'/>
			Profile Picture: <label className="file-upload-container" for="file-upload">
        <input id="file-upload" onChange={props.uploadPic} type="file" style={{display:'none'}}/>
        Select an Image
      </label><br></br>
			User Bio: <textarea className="center" id="about" type="text" cols="40" rows="5" style={{width:'400px', height:'100px'}} name="about"></textarea>
			<button className='center' onClick={props.handleCreateSubmit} type='button'>CREATE</button>
			<p className='center' id='closeWindow' onClick={props.closeUserCreate}>Close</p>
		</div>
  </div>;

export default CreateUserModal;