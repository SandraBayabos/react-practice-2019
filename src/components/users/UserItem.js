import React, { Component } from "react";

class UserItem extends Component {
  // constructor runs only when the component runs
  // can take out constructor & super and this.state and just return state = blach also and get the same result
  // constructor() {
  //   super();
  // console.log("Hi");
  // state = {
  //   id: "id",
  //   login: "mojombo",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/mojombo"
  // };
  // }
  render() {
    // can also destructure this.state.whatever by doing the following:-
    // instead of grabbing these from this.state, we pass them in as props because in Users.js we passed in a prop called {user}
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
