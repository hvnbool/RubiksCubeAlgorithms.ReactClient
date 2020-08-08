import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from "pages/Home";
import Methods from "pages/Methods"
import About from "pages/About";
import Header from "components/Header";
import Step from "pages/Step";
import './App.css';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/methods" component={Methods}/>
            <Route path="/about" component={About}/>
            <Route path="/steps/:stepId" component={Step}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
