import logo from "../Quantiphi.png";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-light "
        style={{ backgroundColor: "#1F497D" }}
      >
        <a className="navbar-brand" href="#">
          <img src={logo} height="55" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <span className="navbar-text mx-auto">
            <h3 style={{ color: "white" }}>Driveboard Wizard</h3>
          </span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">
                <a
                  className="nav-link mr-4"
                  href="#"
                  style={{ color: "white" }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/help">
                <a
                  className="nav-link mr-4"
                  href="#"
                  style={{ color: "white" }}
                >
                  Help
                </a>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
