import React, { Component } from 'react';
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
          <h1 className="App-title">Roster Bots</h1>
        </header>
        <h2>Total Team Score: {this.state.score}</h2>
        <h3>Starters:</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Strength</th>
            <th>Agility</th>
            <th>Total Score</th>
          </tr>
          {this.state.starters.map(player =>
            <tr>
              <td key={player.name}>{player.name}</td>
              <td key={player.speed}>{player.speed}</td>
              <td key={player.strength}>{player.strength}</td>
              <td key={player.agility}>{player.agility}</td>
              <td key={player.totalScore}>{player.totalScore}</td>
            </tr>
            )}
        </table>
        <h3>Substitutes:</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Speed</th>
            <th>Strength</th>
            <th>Agility</th>
            <th>Total Score</th>
          </tr>
          {this.state.substitutes.map(player =>
            <tr>
              <td key={player.name}>{player.name}</td>
              <td key={player.speed}>{player.speed}</td>
              <td key={player.strength}>{player.strength}</td>
              <td key={player.agility}>{player.agility}</td>
              <td key={player.totalScore}>{player.totalScore}</td>
            </tr>
            )}
        </table>
      </div>
    );
  }
}

export default App;
