import React from "react";
// import logo from "../src/Quantiphi2019.png";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import Main from "../src/components/Main";
import QueryFormContainer from "../src/components/QueryFormContainer";
import Stepper from '../src/components/Stepper/stepper'

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Stepper} exact />
        <Route path="/help" component={QueryFormContainer} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
