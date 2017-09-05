const express = require('express');
const profileRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const profileController = require('../controllers/profile-controller')


profileRouter.get('/profile',authHelpers.loginRequired,profileController.display,profileController.index);



module.exports = profileRouter;
