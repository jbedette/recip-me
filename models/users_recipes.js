const db = require('../db/config');

const Relation = {};

Relation.userFindAll = () => {
  return db.query('SELECT * FROM users_recipes JOIN recipes ON recipe_id=recipes.id ORDER BY add_date ASC');
};
Relation.create = (recipe, userid) => {
  let timeNow = Date.now();
  return db.one(`
    INSERT INTO users_recipes
    (user_id, recipe_id)
    VALUES ($1, $2)
    RETURNING *
  `, [user.id, recipe.description, recipe.ingredients,]);
};
module.exports = Relation;
