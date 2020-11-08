import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Users from "./components/Users";
import BlogDetails from "./components/BlogDetails";
import NotFound from './components/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
            <Navbar></Navbar>
            <Switch> 
              <Route exact path='/carlzeiss-task' component={Home}></Route> 
              <Route path='/login' component={Login}></Route> 
              <Route exact path='/posts' component={Posts}></Route> 
              <Route exact path='/users' component={Users}></Route> 
              <Route path='/posts/:blogId' component={BlogDetails}></Route>
              <Route component = { NotFound }/>
            </Switch> 
        </div>
      </Router>
  );
  }
}

export default App;
