import React, { Component } from "react";
import { Link } from "react-router-dom";
import waves from "../img/waves.svg";
import add from "../img/add.svg";
import LeftMenu from "./LeftMenu";

export class Navbar extends Component {
  render() {
    return (
      <div className="search__nav">
        <nav className="navbar navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">MusicDegree</Link>
          <Link to={"/"}>
            <img src={waves} alt="logo" className="logo__musicDegree " />
          </Link>

          <form className="form-inline mx-auto">
            <Link to={"/newsheet"}>
              <img src={add} className="add__logo mr-3" alt="add-logo" />
            </Link>
            <input
              className="form-control mr-sm-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to={"/search"}>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </nav>
        <LeftMenu />
      </div>
    );
  }
}

export default Navbar;
