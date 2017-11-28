import React from "react";
import "./CreateUserModal.css";

const CreateUserModal = props =>

  <div className="createUserModal">
    <div id="createUser" className="center displayLogin">
			<h2 className="center" id="createUserPrompt">Enter all user information.</h2>

			First Name: <input className="center" id="newFname" type="text" name="firstName" onChange={props.handleFormChange}/>

			Last Name: <input className="center" id="newLname" type="text" name="lastName" onChange={props.handleFormChange}/>

			userName: <input className="center" id="newUserName" type="text" name="userName" onChange={props.handleFormChange}/>

			Email: <input className='center' id='newEmail' type='text' name='email' onChange={props.handleFormChange}/>

			Password: <input className='center' id='newPassword' type='password' name='password' onChange={props.handleFormChange}/>

			Confirm Password: <input className='center' id='newPassword2' type='password' name='password2' onChange={props.handleFormChange}/>

			Adventure Level: <input className='center' id='newAdLvl' type='text' name='adventureLevel' onChange={props.handleFormChange}/>

			Profile Picture: <label className="file-upload-container" htmlFor="file-upload" onChange={props.handleFormChange}>

        <input id="file-upload" onChange={props.uploadPic} type="file" name="profilePic" style={{display:'none'}}/>
        {props.pictureToUpload}

      </label><br></br>

			User Bio: <textarea className="center" id="about" type="text" cols="40" rows="5" style={{width:'400px', height:'100px'}} name="about" onChange={props.handleFormChange}></textarea>
			<button className='center' onClick={props.handleCreateSubmit} type='submit'>CREATE</button>
			<p className='center' id='closeWindow' onClick={props.closeUserCreate}>Close</p>
			
		</div>
  </div>;

export default CreateUserModal;