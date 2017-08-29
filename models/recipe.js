// models/recipes.js

const db = require('../db/config');

const Recipe = {};

Recipe.findAll = () => {
  return db.query('SELECT * FROM recipes ORDER BY id ASC');
};
Recipe.findById = id => {
  return db.oneOrNone(`SELECT * FROM recipes WHERE id = $1`, [id]);
};

module.exports = Recipe;
