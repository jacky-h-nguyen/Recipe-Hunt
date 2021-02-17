import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var url = 'Search?term=' + this.state.value;
    window.location.href = url;
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Recipe Hunt</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar>
        <header className="App-header">
        <h2>
            Recipe Hunt
        </h2>
          <form onSubmit={this.handleSubmit}>
            <label style={{ color: "white" }}>
          <input type="text" value={this.state.value} onChange={this.handleChange} class="form-container" inline style={{ marginRight: 5 }} />
            </label>
            <input type="submit" value="Search" class="btn" style={{ backgroundColor: "white", color: "black", marginRight: 5 }} />
          </form>
          <center style={{ backgroundColor: "#282c34" }}><img width="500px" src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img></center>
        </header>
      </div>
    );
  }
}

export default Homepage;