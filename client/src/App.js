import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-primary fixed-top">
            <div className="container">
              <h4 className="navbar-brand text-light nav-link">
                JWT Authentication-MERN
              </h4>
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/login" className="nav-link text-light">
                    Login
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/register" className="nav-link text-light">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}
