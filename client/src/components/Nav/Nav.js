import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to={"/"} className="navbar-brand">
        New York Times Article Search
      </Link>

      <Link class="nav-link" to={"/saved"}>
        Saved Articles
      </Link>
    </nav>
  );
}

export default Nav;