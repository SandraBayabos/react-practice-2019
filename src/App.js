import React, { Component } from "react";
import "./App.css";

// convert function App() to class App for now & we need to extend the React.Component (but if we import {Component from above then can just say Component})
class App extends Component {
  // render() is a lifecycle method that runs when all the other components are loaded
  render() {
    //All javscript goes under the render() including variables, functions etc.
    const name = "Jupiter Moon";
    const loading = false;
    const showName = false;

    return (
      // JSX must only have ONE parent element, otherwise get warning. So everything must go inside this one div. In chrome developer you'll see everything, including the App div is wrapped around a div called "root".
      //So can replease <div className="App"><div> with <React.Fragment></React.Fragment>, <Fragment></Fragment> or just <> so that it goes directly from "root" and everything is rendered within
      <div className="App">
        <h1></h1>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
      </div>
    );
  }
}

export default App;
