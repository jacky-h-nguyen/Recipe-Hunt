import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Switch, } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'

var searchTerm = ""
var imgURL = ""

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  async componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const term = query.get("term");
    searchTerm = term;
    document.getElementById("demo").append(term);
    axios.post('http://localhost:5000/getRecipe', {
      term: searchTerm
    })
      .then((response) => {
        document.getElementById("recipefor").append(response.data[0][0]);
        imgURL = response.data[0][1]
        this.setState({ searchResults: response.data[0][1] })
        var result = response.data[1]
        var lengthOf, text, i;
        lengthOf = result.length;
        text = "<ul>";
        text += "<br/>"
        for (i = 0; i < lengthOf; i++) {
          text += "<center>" + result[i][0] + "<center/>" + "<br/>" + '<center><img alt="No Image" src="' + result[i][1] + '"></img><center/>' + "<p>";
          text += "<br/>"
        }
        text += "</ul>";
        document.getElementById("ingredientslist").innerHTML = text;

      }, (error) => {
        alert(error);
      });
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
          <p id="demo" style={{ color: "white", textAlign: "center" }}>Search Parameter: </p>
          <p id="recipefor" style={{ color: "white", textAlign: "center" }}>Recipe: </p>
          <img src={imgURL}></img>
          <br/>
          <h1>Ingredients:</h1>
          <p id="ingredientslist" style={{ color: "white", textAlign: "center" }}></p>
          <br />
        </header>
      </div>
    );
  }
}

export default Search;