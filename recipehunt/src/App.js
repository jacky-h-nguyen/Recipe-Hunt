import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import Search from "./components/Search"
import Homepage from "./components/Homepage"

export default class App extends React.Component{

render(){
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Search" component={Search} />
      </Router>
    </div>
  );
}
}