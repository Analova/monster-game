import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList>
          {this.state.monsters.map(mon => (
            <h1 key={mon.id}>{mon.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
