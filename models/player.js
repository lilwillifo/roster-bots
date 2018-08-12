function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Player {
  constructor(totalScore, teamName) {
    this.name = teamName + totalScore;
    if (totalScore > 100) {
        this.totalScore = 100;
    } else {
        this.totalScore = totalScore;
    }
    this.speed = this.totalScore - getRandomInt(0, this.totalScore);
    this.strength = this.totalScore - this.speed - getRandomInt(0, this.totalScore - this.speed);
    this.agility = this.totalScore - this.speed - this.strength;
  }
}

module.exports = Player
