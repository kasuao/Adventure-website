import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Adventure from "./pages/Adventure";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () =>

    <div>
      <Adventure></Adventure>
    </div>;

export default App;
