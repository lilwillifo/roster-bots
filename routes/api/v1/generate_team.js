const express = require('express');
const router = express.Router();

const TeamsController = require('../../../controllers/teamsController')
router.get('/', TeamsController.index)

module.exports = router;
