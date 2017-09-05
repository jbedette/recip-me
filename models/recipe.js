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
    (title, ingredients, img, link, user_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `, [recipe.title, recipe.ingredients, recipe.img, recipe.link, userid]);
};
Recipe.destroy = (id)=>{
  return db.none(`
    DELETE FROM recipes
    WHERE id=$1
    `)
}
Recipe.findUser = (userid)=>{
  return db.query(`
    SELECT * FROM recipes
    JOIN users ON users.id = recipes.user_id
    where users.id = $1`,[userid])
}
module.exports = Recipe;
