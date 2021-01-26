import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ToDo from "./Pages/ToDo";

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/todo">ToDo</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={ToDo} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;