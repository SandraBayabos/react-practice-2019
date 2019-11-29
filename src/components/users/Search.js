import React, { Component } from "react";

// FORMS ARE ALWAYS COMPONENT-LEVEL STATE. YOU WON'T BRING IT TO APP.JS LEVEL

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  // if you don't use an arrow function, you need to bind "this" to the state or else "this" will be undefined
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
