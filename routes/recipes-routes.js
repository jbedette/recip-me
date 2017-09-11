const express = require('express');
const recipesController = require('../controllers/recipes-controller');
const recipesRouter = express.Router();
const recipesHelper = require('../services/recipes-helper')
const authHelpers = require('../services/auth/auth-helpers')
recipesRouter.post('/:ingredients', recipesHelper.getRecipeFromApi, recipesController.getRecipe);

//index
recipesRouter.get('/', recipesController.index)
//new
recipesRouter.post('/',authHelpers.loginRequired,recipesController.create, recipesController.index)

recipesRouter.delete('/delete', authHelpers.loginRequired, recipesController.delete)


module.exports = recipesRouter;
