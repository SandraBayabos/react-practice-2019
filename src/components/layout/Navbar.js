import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// instead of props we can put them directly in as icon, title so no need to type props.icon or props.title below

const Navbar = ({ icon, title }) => {
  //if don't want to pass down props you can use static defaultProps or static propTypes. Both will work

  // render() {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
  // }
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
