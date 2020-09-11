import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App">
      <Router>
      <header
        style={{
          textAlign: `center`,
          backgroundColor: `darkorchid`,
          width: `100vw`,
          // height: `10vh`,
        }}
      >
        <h1>header with stuff man</h1>
      </header>
        <Switch>
          <Route exact path ={"/"}>
            <About />
          </Route>
          <Route exact path ={"/about"}>
            <About />
          </Route>
          <Route exact path ={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
