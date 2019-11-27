import React, { Component } from "react";
import PropTypes from "prop-types";

export class Navbar extends Component {
  //if don't want to pass down props you can use static defaultProps or static propTypes. Both will work

  static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github"
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
