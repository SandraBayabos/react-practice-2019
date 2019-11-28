import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div style={usersStyle}>
        {/* Loop through the list in the state using .map */}
        {/* each child in a list needs to have a unique key, so in this case we use user.id */}
        {/* user={user} is we are passing in the entire user - each {user} represents the entire user object after you've looped */}
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

// creating a variable for usersStyle

const usersStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
