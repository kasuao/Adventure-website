import React from "react";
import "./Nav.css";


const Nav = () =>

  <nav class="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> 
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span> 
          <span className="icon-bar"></span> 
        </button>
          <a href="/" className="navbar-brand">
            Adventure Awaits
          </a>
      {/*nav bar header ending div */}
      </div>

      {/*nav links that will be toggled*/}
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown"><a href="#">Post <span className="sr-only"></span></a></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown"><a href="/user">Profile <span className="sr-only"></span></a></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown"><a href="/categories">Adventures <span className="sr-only"></span></a></li>
        </ul>

      </div>
    </div>

  </nav>


export default Nav;
