import React from 'react';
// import "./AdventureHeader.css";
//creating page header for all pages


const BodyCategory = props =>

	<div className="BodyCategory">

 	  	 
		{/*conflict with master here: <div id="blogging" class="blog-post">*/}
        {props.adventures.map(result =>
          <div className="blog-post">
            <h3>{result.adventure}<small> {result.date}</small></h3>
            <img className="thumbnail postPic" src={result.adventurePic} />
            <p>{result.description}</p>
          </div>
        )}
 		 	  

	</div>;

export default BodyCategory;