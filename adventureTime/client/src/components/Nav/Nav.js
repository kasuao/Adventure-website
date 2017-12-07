import React from "react";
import "./Nav.css";


const Nav = props =>

  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">

      {/* Toggle will be grouped in mobile */}
      <div className="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collpase-1" aria-expanded="false">
          <span className="sr-only">Toggle Navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <a className="navbar-brand" href="/">Adventure Awaits</a>
      </div>

      {/* Toggled content */}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collpase-1">

        <ul className="nav navbar-nav navbar-right">

          <li className="dropdown"><a onClick={props.handleCategoryRedirect}>Ventures <span className="sr-only"></span></a>
          </li>

          <li className="dropdown"><a onClick={props.handleProfileRedirect}>Profile <span className="sr-only"></span></a>
          </li>

          <li className="dropdown" id="post"><a onClick={props.handlePostCreate} >Post <span className="sr-only"></span></a>
          </li>
          
        </ul>

      </div>
    </div>

  </nav>

        

export default Nav;
