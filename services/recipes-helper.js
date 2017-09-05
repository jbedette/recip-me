require('isomorphic-fetch');
//require('dotenv').config(); //not necessary but good for future

function getRecipeFromApi(req, res, next){
  fetch(`http://www.recipepuppy.com/api/?i=${req.body.ingQuery}&q=&p=1`)
  .then((recipeRes) => {
      return recipeRes.json();
    }).then((data) => {
        //let recipes = ();
      //console.log(data.results)
      //data.results.forEach(function (i) {
        let recipe = {};
        recipe.title = data.results[0].title;
        recipe.link = data.results[0].href;
        recipe.img = data.results[0].thumbnail;
        recipe.ingredients = data.results[0].ingredients;
        //recipes.push(recipe);
      //})
      res.locals.recipe = recipe;
      //console.log(recipes)
      res.render('recipes/show-recipes', { recipe: res.locals.recipe});
      next();
    }).catch((err) => {
          console.log(err);
    });
}

module.exports = {
  getRecipeFromApi,
}
