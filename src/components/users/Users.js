import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt"
      },
      {
        id: "3",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett"
      }
    ]
  };
  render() {
    return (
      <div style={usersStyle}>
        {/* Look through the list in the state using .map */}
        {/* each child in a list needs to have a unique key, so in this case we use user.id */}
        {/* user={user} is we are passing in the entire user - each {user} represents the entire user object after you've looped */}
        {this.state.users.map(user => (
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
