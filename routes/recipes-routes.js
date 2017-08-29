const express = require('express');
const recipesController = require('../controllers/recipes-controller');
const recipesRouter = express.Router();

recipesRouter.get('/', recipesController.index)

recipesRouter.get('/:id',recipesController.show)
module.exports = recipesRouter;
