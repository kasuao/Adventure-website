import React from 'react';
// import "./AdventureHeader.css";
//creating page header for all pages


const BodyCategory = props =>

	<div className="BodyCategory">

 	  	 
		{/*conflict with master here: <div id="blogging" class="blog-post">*/}
      <div className="container">
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

	</div>;

export default BodyCategory;