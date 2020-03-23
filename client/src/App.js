import React, { Component } from "react";

import UserList from "./components/UserList";
export default class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(dataList => this.setState({ data: dataList }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App" data-testid="app">
        <h1>
          The Women's World Cup players ranked by search interest{" "}
          <span>June-July 2019</span>
        </h1>

        <UserList userList={this.state.data} />
      </div>
    );
  }
}
