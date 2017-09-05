const express = require('express');
const userRoutes = express.Router();
const usersController = require('../controllers/users-controller');
const authHelpers = require('../services/auth/auth-helpers');



userRoutes.post('/userPage', authHelpers.loginRequired, usersController.index);

module.exports = userRoutes;
