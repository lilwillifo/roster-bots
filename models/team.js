
class Team {
 totalTeamScore() {
    return ``
  }
 starters() {
    return [1,2,3,4,5,6,7,8,9,0]
  }
 substitutes() {
    return [1,2,3,4,5]
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

}

module.exports = Team
