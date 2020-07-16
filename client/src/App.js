import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Parts from "./views/Parts/Parts";
import About from "./views/About/About";
import './App.css'
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Parts</Link>
        <Link to="/About">About</Link>
      </nav>

      <Switch>
          <Route path="/about" component={About}/>
          <Route path="/" component={Parts} />
      </Switch>
    </Router>
  );
}

export default App;
