const express = require('express');
const profileRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const profileController = require('../controllers/profile-controller')
const recipesController = require('../controllers/recipes-controller')


profileRouter.get('/profile',authHelpers.loginRequired,profileController.display,profileController.index);

profileRouter.post('/',authHelpers.loginRequired,recipesController.create, recipesController.index)

profileRouter.get('/single/:id', recipesController.getRecipe )

profileRouter.put('/:id',profileController.update)


module.exports = profileRouter;
