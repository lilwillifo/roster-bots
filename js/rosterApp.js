//value fixed for purposes of this assignment and its assumptions
const playerSalaryCap = 100;

let makeRoster = (teamSize, substitutes, salaryCap) => {
  let roster = [];

  if (!teamSize || teamSize < 1) teamSize = 15;
  if (!substitutes || substitutes >= teamSize) substitutes = 5;
  if (!salaryCap) salaryCap = 175;

  let starters = teamSize - substitutes;
  let starterPoints;

  for (let i = 0; i < substitutes; i++) {
    roster.push(i);
  }
  roster.length === 0 ? starterPoints = salaryCap : starterPoints = salaryCap - roster.reduce((a, b) => a + b);

  while (starters > 0) {
    roster.push(Math.ceil(starterPoints / teamSize));
    roster.sort();
    roster.forEach((element, index, array) => {
      if (array[index - 1] == element) roster[index] += 1;
    });

    starterPoints = salaryCap - roster.reduce((a, b) => a + b);
    starters -= 1;
  }
  return roster;
};


if(typeof exports !== 'undefined') {
    exports.makeRoster = makeRoster;
}
