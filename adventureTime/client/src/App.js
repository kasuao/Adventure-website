import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adventure from "./pages/Adventure";
import User from "./pages/User";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Profile from "./pages/Profile";
import CategoryLayout from "./components/CategoryLayout";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// what shows in the html below is what will appeal on the home page.
// HTML Routes:
/*HTML Routes are set in the <Route> tags. to create a new route you just add in the page 
using the syntax and format in the Routes already created below.

NOTE: this will not work unless you create a single component hence the <div> tags. Using those
make all the components within all in one component. */
const App = () =>
 <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adventure" component={Adventure} />
        <Route exact path="/categories" component={Categories} />


        {/*<Route exact path="/user" component={user} />*/}
        <Route exact path="/user" component={User} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  </Router>;
export default App;

