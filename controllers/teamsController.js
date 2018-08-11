pry = require('pryjs');
const Team = require('../models/team')

class TeamsController {

  static generate(request, response, next){
    response.send({"totalTeamScore": TeamsController.totalTeamScore(),
                    "starters": TeamsController.starters(),
                    "substitutes": TeamsController.substitutes()})
  }

  static totalTeamScore() {
      return ``
    }
  static starters() {
      return [1,2,3,4,5,6,7,8,9,0]
    }
  static substitutes() {
      return [1,2,3,4,5]
    }


}

module.exports = TeamsController
