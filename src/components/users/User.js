import React, { Component } from "react";

class User extends Component {
  //need to use componentDidMount() to fire off the getUser that we used in App.js
  // this.props.match.params comes from <Route exact path="/user/:login"/>
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
