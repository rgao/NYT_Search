import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <Link to={"/"} className="navbar-header text-center">
          New York Times Article Search
        </Link>

        <Link className="nav-link" to={"/saved"}>
          Saved Articles
        </Link>
      </nav>
    );
  }
}

export default Nav;