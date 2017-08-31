const express = require('express');
const recipesController = require('../controllers/recipes-controller');
const recipesRouter = express.Router();
//index
recipesRouter.get('/', recipesController.index)
//new
recipesRouter.post('/',recipesController.create)
//show
recipesRouter.get('/:id',recipesController.show)
module.exports = recipesRouter;
