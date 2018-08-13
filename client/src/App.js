import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {teamName: "Example", score: [], starters: [], substitutes: []}


  componentDidMount() {
    fetch('/api/v1/generate_team')
      .then(res => res.json())
      .then(data => {
        let score = data.totalTeamScore
        let starters = data.starters
        let substitutes = data.substitutes
        this.setState({score: score, starters: starters, substitutes: substitutes})
      });
  }

  handleSubmit(event){
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Roster Bots</h1>
        </header>

        <h2>Make your team!</h2>
        <div id="make-roster">
         <form onSubmit={this.handleSubmit}>
             <input placeholder="Team Name" type="text" name="teamName" onChange={(ev)=>this.setState({teamName:ev.target.value})} /><br />
         </form>   ​
        </div>

        <h2 className="App-intro"> Congratulations, you are now the owner of a robot sports team. Each owner is responsible for creating a roster
of player bots for league play. The league requires that your roster be filled out with 10 starters and 5
substitutes. You must submit your roster before you can begin league play.
The league has mandated that the total attribute score of each of your player bots can not exceed 100 points,
and no two players can have the same score, otherwise your team is disqualified from league play.
The league has also implemented a salary cap. Each teams roster can not exceed 175 points.</h2>
<h2>The app assumes you prefer the best possible starter lineup, with low emphasis on your substitutes.</h2>

        <h2>{this.state.teamName} Total Score: {this.state.score}</h2>
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
              <td key={player.name}>{this.state.teamName}{player.totalScore}</td>
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
