import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {score: [], starters: [], substitutes: []}

  componentDidMount() {
    fetch('/api/v1/generate_team')
      .then(res => res.json())
      .then(data => {
        let score = data.totalTeamScore
        let starters = data.starters
        let substitutes = data.substitutes
        this.setState({ score: score, starters: starters, substitutes: substitutes})
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Roster Bots</h1>
        </header>
        <p>Total Team Score: {this.state.score}</p>
        <ul>Starters: {this.state.starters.map(player =>
            <li key={player.name}>{player.name}: Total Score: {player.totalScore}</li>
          )}
        </ul>
        <ul>Substitutes: {this.state.substitutes.map(player =>
            <li key={player.name}>{player.name}: Total Score: {player.totalScore}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
