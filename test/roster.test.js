process.env.NODE_ENV = 'test'

const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const expect = chai.expect;
const pry = require('pryjs')
const app = require('../app')

chai.use(chaiHttp);

describe("GET /api/v1/generate_team", () => {
  it('returns a json object of randomly generated team members and their scores', (done) => {
    chai.request(app)
    .get('/api/v1/generate_team')
    .end((err, res) => {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('totalTeamScore');
      expect(res.body).to.have.property('starters');
      expect(res.body.starters.length).to.eq(10);
      expect(res.body).to.have.property('substitutes');
      expect(res.body.substitutes.length).to.eq(5);
      done();
    })
  })
});

const makeRoster = require('../models/team.js').prototype.makeRoster;
const addPlayers = require('../models/team.js').prototype.addPlayers;
const Player = require('../models/player.js')
const salaryCap = 175;
const playerMax = 100;
const teamSize = 15;

describe('makeRoster', ()=>{
  it('should be a function', ()=>{
    assert.isFunction(makeRoster);
  });
  it('should output an array', ()=>{
    assert.isArray(makeRoster())
  });
  it('output should contain totalScores for the teamSize', ()=>{
    assert.lengthOf(makeRoster(), teamSize)
  });
  it('output should contain unique totalScores', ()=>{
    let scores = makeRoster();
    scores.sort().forEach((e,i,a)=>assert.notEqual(e, a[i-1]))
  });
  it(`sum of output should be below salary cap (${salaryCap})`, ()=>{
    let playerScores = makeRoster();
    assert.isAtMost(playerScores.reduce((a,b)=>a+b), salaryCap)
  });
  it(`no single player totalScore can be greater than ${playerMax}`, ()=>{
    let playerScores = makeRoster();
    playerScores.every(e => assert.isAtMost(e, playerMax))
  });
});

describe('addPlayers', ()=>{
  it('should be a function', ()=>{
    assert.isFunction(addPlayers);
  });
  it('should output an array of Player objects', ()=>{
    assert.isArray(addPlayers(makeRoster(), 'TEAMNAME'));
    assert.lengthOf(addPlayers(makeRoster(), 'TEAMNAME'), teamSize)
    expect(addPlayers(makeRoster(), 'TEAMNAME')).to.satisfy(function(players) {
      return players.every(function(player) {
          return player instanceof Player;
      });
    });
  });
});
