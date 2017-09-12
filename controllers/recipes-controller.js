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

recipesController.getRecipe = (req, res) => {
  Recipe.findById(req.params.id).then(recipe=>{
    res.render('profile/single',{recipe:recipe}
    ).catch(err=>{
      console.log(err);
      res.status(500).json(err);
    })
  })
};
//add recipe

recipesController.create=(req,res)=>{
  Recipe.create({
    title: req.body.title,
    ingredients:req.body.ingredients,
    link: req.body.link,
    img:req.body.img,},req.user.id)
    .then(recipe =>{
      console.log(recipe)
      res.redirect('/');
    })
  .catch(err => {
    alert('you must logs to add recipe');
  });
}
recipesController.delete=(req,res)=>{
  Recipe.destroy(req.body.id)
  .then(()=>{
    res.redirect('/profile/profile');
  })
}

module.exports = recipesController;
