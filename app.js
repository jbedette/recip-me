const express = require('express');
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');

//initialize
const app = express();
require('dotenv').config();



//middles
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//user_auth middles
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

// ejs views and port
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));


//recipe-routes
const recipesRouter = require('./routes/recipes-routes');
app.use('/recipes', recipesRouter);

app.get('/', (req, res) => {
  res.render('index');
});

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

const profileRoutes = require('./routes/profile-routes');
app.use('/profile', profileRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
