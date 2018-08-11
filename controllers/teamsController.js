pry = require('pryjs');
const Team = require('../models/team')

class TeamsController {

  static index(request, response, next){
    response.sendStatus(200)
  }

}

module.exports = TeamsController
