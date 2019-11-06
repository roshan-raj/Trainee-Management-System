import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
import "./nav.css";

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.torryharris.com/">
            <img src={logo} width="30" height="30" alt="THIS" />
          </a>
          <Link to="/" className="navbar-brand">Torry Harris Integration Solution</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav">
                <li className="navbar-item">
                  <Link to="/login" className="nav-hover">Login</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/register" className="nav-hover">Reset Password</Link>
                </li>
              </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
