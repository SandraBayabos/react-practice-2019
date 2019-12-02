import React, { Component } from "react";

class User extends Component {
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
    return <div>User</div>;
  }
}

export default User;
