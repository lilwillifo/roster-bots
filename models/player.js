function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class Player {
  constructor(totalScore, teamName) {
    this.name = teamName + totalScore;
    this.totalScore = totalScore;
    this.speed = this.totalScore - getRandomInt(totalScore);
    this.strength = this.totalScore - this.speed - getRandomInt(this.totalScore - this.speed);
    this.agility = this.totalScore - this.speed - this.strength;
  }
}

module.exports = Player
