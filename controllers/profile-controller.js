const Recipe = require('../models/recipe');
const User = require('../models/user.js');
const profileController = {};

profileController.index = (req,res)=>{
  res.render('profile/profile',{
    recipe:res.locals.userStuff
  })
}

profileController.display = (req,res,next)=>{
  Recipe.findUser(req.user.id)
  .then(userStuff=>{
    res.locals.userStuff = userStuff
    next()
  }).catch(err=>{
    console.log(err);
  })
}

module.exports = profileController;
