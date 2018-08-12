import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {team: []}

  componentDidMount() {
    fetch('/api/v1/generate_team')
      .then(res => res.json())
      .then(team => this.setState({ team }));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Roster Bots</h1>
        </header>
        <div>Total Team Score: {this.state.team.totalTeamScore}</div>
      </div>
    );
  }
}

export default App;
