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
    (name, age, species, picture, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `, [recipe.title, recipe.description, recipe.ingredients, recipe._date, userid]);
};

module.exports = Recipe;
