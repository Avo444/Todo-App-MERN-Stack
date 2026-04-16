const { UsersController } = require('../controllers');

const express = require('express');
const router = express.Router();
const usersController = new UsersController();

router.get('/:id', usersController.getUserData);

module.exports = router;
