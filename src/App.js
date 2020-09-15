//primary fx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//page imports
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
//components
import NavBar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path={"/"}>
            <About />
          </Route>
          <Route exact path={"/about"}>
            <About />
          </Route>
          <Route exact path={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
