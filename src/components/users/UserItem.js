import React from "react";
import PropTypes from "prop-types";

// for functional stateless components we pass in props like this so at the bottom it'll just be props.whatever
// destructure even more so instead of props we can put them directly in as users props so no need to type props.whatever below

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
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
  // render() {
  // can also destructure this.state.whatever by doing the following:-
  // instead of grabbing these from this.state, we pass them in as props because in Users.js we passed in a prop called {user}
  // const { login, avatar_url, html_url } = props.user;
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
  // }
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
