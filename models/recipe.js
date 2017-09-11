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
  console.log(id)
  return db.none(`
    DELETE FROM recipes
    WHERE id=$1
    `,[id])
};
Recipe.findUser = (userid)=>{
  return db.query(`
    SELECT * FROM  users
    JOIN recipes ON users.id = recipes.user_id
    where recipes.user_id = $1`,[userid])
}
Recipe.update = (recipe,id) => {
  return db.one(`
    UPDATE recipes SET
    title = $1
    WHERE id = $2
    RETURNING *
  `, [recipe.title, id]);
}


module.exports = Recipe;


