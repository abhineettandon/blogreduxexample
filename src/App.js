import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './store'

import PostForm from './components/PostForm'
import Posts from "./components/Posts";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <PostForm />
            <Posts />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
