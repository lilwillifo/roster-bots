pry = require('pryjs');
const Team = require('../models/team')

class TeamsController {
  static generate(request, response, next){
    response.send({"totalTeamScore": Team.prototype.totalTeamScore(),
                    "starters": Team.prototype.starters(),
                    "substitutes": Team.prototype.substitutes()
                  });
  }
}

module.exports = TeamsController
