const Recipe = require('../models/recipe');

const recipesController = {};

recipesController.index = (req, res) => {
  Recipe.findAll()
    .then(recipes => {
      res.render('recipes/index-recipes', { recipes: recipes });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
recipesController.show = (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      res.render('recipes/show-recipes', { recipe: recipe })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
module.exports = recipesController;
