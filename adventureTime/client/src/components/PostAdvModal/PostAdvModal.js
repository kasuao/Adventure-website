import React from "react";
import "./PostAdvModal.css";

const PostAdvModal = props =>
  <div className="PostAdvModal">

	{/* need to update and change classname*/}  
    <div id="createPost" className="center displayLogin">

    		{/* update create user adv */}
			<h2 className="center" id="createUserAdv">Enter Your Adventure</h2>

			Adventure Title: <input className="center" id="newAdventure" type="text" name="adventure" onChange={props.handleFormChange}/>

			Category: <select className="form-control" id="newCategory" type="text" name="category" onChange={props.handleFormChange}>
								<option>Hiking</option>
								<option>Fishing</option>
								<option>Biking</option>
							  </select>

			Difficulty Level: <select className="form-control" id="newDifficulty" type="text" name="difficultyLevel" onChange={props.handleFormChange}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							  </select>

			Landscape Level: <select className='form-control' id='newLandscape' type='text' name='landscapeLevel' onChange={props.handleFormChange}>
							    <option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							  </select>

			Fun Level: <select className='form-control' id='newFun' type='text' name='funLevel' onChange={props.handleFormChange}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							  </select>

			Overall Enjoyment: <select className='form-control' id='newEnjoyment' type='text' name='enjoymentLevel' onChange={props.handleFormChange}>
							  <option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
								<option>9</option>
								<option>10</option>
							  </select>

			Adventure Pictures: <label className="file-upload-container" htmlFor="file-upload" onChange={props.handleFormChange}>

        <input id="file-upload" onChange={props.uploadPic} type="file" name="adventurePic" style={{display:'none'}}/>

        {props.pictureToUpload}

      </label>

      	<br>
      	</br>

			Description: <textarea className="center" id="description" type="text" cols="40" rows="5" style={{width:'400px', height:'100px'}} name="description" onChange={props.handleFormChange}></textarea>
			<button className='center' onClick={props.handleCreateSubmit} type='submit'>Post</button>
			<p className='center' id='closeWindow' onClick={props.closePostCreate}>Close</p>
		
		</div>
  </div>;

export default PostAdvModal;