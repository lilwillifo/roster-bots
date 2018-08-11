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
