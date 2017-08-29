const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const recipesRouter = require('./routes/recipes-routes');
app.use('/recipes', recipesRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
