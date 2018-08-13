const Player = require('./player.js')

class Team {

 totalTeamScore() {
    return this.makeRoster().reduce((a, b) => a + b)
  }
 starters(num, teamSize) {
   if (!teamSize || teamSize < 1) teamSize = 15;
   if (!num || num >= teamSize) num = 10;
    return this.addPlayers(this.makeRoster()).slice(0, num)
  }
 substitutes(num, teamSize) {
   if (!teamSize || teamSize < 1) teamSize = 15;
   if (!num || num >= teamSize) num = 5;
    return this.addPlayers(this.makeRoster()).slice(teamSize - num, teamSize)
  }

  //value fixed for purposes of this assignment and its assumptions
  makeRoster(teamSize, starters, salaryCap) {
    let roster = [];

    if (!teamSize || teamSize < 1) teamSize = 15;
    if (!starters || starters >= teamSize) starters = 10;
    if (!salaryCap) salaryCap = 175;

    let substitutes = teamSize - starters;
    let starterPoints;

    // This design assumes you only care about the starters,
    // and are willing to have lowest scores for subs
    for (let i = 0; i < substitutes; i++) {
      roster.push(i);
    }
    starterPoints = salaryCap - roster.reduce((a, b) => a + b);

    while (starters > 0) {
      // divides remaining points among starters
      roster.push(Math.ceil(starterPoints / starters));

      // ensures that there are no duplicated scores
      roster.sort();
      roster.forEach((element, index, array) => {
        if (array[index - 1] == element) roster[index] += 1;
      });

      // reduces the remaining number of starterPoints to divy up
      starterPoints = salaryCap - roster.reduce((a, b) => a + b);
      starters -= 1;
    }
    return roster;
  };

  addPlayers(allScores, teamName) {
    if (!teamName) teamName = "YAY";
    let team = allScores.map(e => new Player(e, teamName));
    // bubble sort to sort players by total scores
    for (let i = team.length - 1; i >= 0; i--) {
      for (let j = 1; j<= i; j++) {
        if (team[j - 1].totalScore < team[j].totalScore) {
          let temp = team[j - 1 ];
          team[j - 1] = team[j];
          team[j] = temp
        }
      }
    }
    return team
};

}

module.exports = Team
