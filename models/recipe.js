// models/recipes.js

const db = require('../db/config');

const Recipe = {};

Recipe.findAll = () => {
  return db.query('SELECT * FROM recipes ORDER BY id ASC');
};
Recipe.findById = id => {
  return db.oneOrNone(`SELECT * FROM recipes WHERE id = $1`, [id]);
};
Recipe.create = (recipe, userid) => {
  return db.one(`
    INSERT INTO recipes
    (title, description, ingredients)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [recipe.title, recipe.description, recipe.ingredients]);
};

module.exports = Recipe;
