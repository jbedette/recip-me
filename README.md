# songclone


use recipe apis to look up recipes and save it to a user

-user table
-recipes table
-join table of users and events
-stretch goals = npm search function

-major issues, working with the users/events join, figuring out the songkick api,


search- https://www.npmjs.com/package/algoliasearch

recipe api -http://www.recipepuppy.com/about/api/

state of the app address 8/31:
what i have
-index of recipes
-show of recipes
-user auth
what i think i have
-user id attached to cat
  +can use that to make join table
what i need to do today
-add a recipe to a user using rel table
-display user's recipies using rel table


rel table
-make migration
-set R_hard_id, do I need rHard? yes for user created recipes later
-make it so recipes index shows some different dummy data
-make add recipe, have it add to

recipes table cols = title, description, R_hard_


don't worry about multiple instasnces of the same recipe yet, just get the id to the new table


select most recent id : SELECT id FROM recipes ORDER BY id DESC LIMIT 1

**hidden form on the api values, save button makes post from, form prepares req.body, focus on value and name, give each element name, <input type='hidden' value=<%dog%> name ='animal'

req.bod={
  animal:dog
  }**
