import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
// import UserItem from "./components/users/UserItem";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import "./App.css";

// convert function App() to class App for now & we need to extend the React.Component (but if we import {Component from above then can just say Component})
class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   // can do axios get request using.then (without the async on componentDidMount() OR can use async)
  //   // axios
  //   //   .get("https://api.github.com/users")
  //   //   .then(res => console.log(res.data));
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //searchUsers is a function below and we are passing the prop UP from Search.js.
  //When we submit the form in Search.js, it calls the props.searchUsers, and that is being caught down below in searchUsers = this.searchUsers and saying when that fires, call this.searchUsers, which is the async call below, which is making a request and setting the state to this.searchUsers i.e. the data that gets returned
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  //Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });
  // render() is a lifecycle method that runs when all the other components are loaded
  render() {
    //All javscript goes under the render() including variables, functions etc.

    return (
      // JSX must only have ONE parent element, otherwise get warning. So everything must go inside this one div. In chrome developer you'll see everything, including the App div is wrapped around a div called "root".
      //So can replease <di v className="App"><div> with <React.Fragment></React.Fragment>, <Fragment></Fragment> or just <> so that it goes directly from "root" and everything is rendered within
      <div className="App">
        {/* title is a prop that we will pass down to Navbar.js */}
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} />
          {/* loading and users are being passed in as props so that Users.js can access them */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
