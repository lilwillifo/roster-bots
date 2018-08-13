const express = require('express');
const router = express.Router();
const TeamsController = require('../../../controllers/teamsController')

router.get('/', TeamsController.generate)
router.post('/', TeamsController.create)

module.exports = router;
