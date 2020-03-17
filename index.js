const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoDbURI);

const authroutes = require('./routes/authroutes');

const app = express();

app.use(cookieSession({
        maxAge: 1 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    }));

app.use(passport.initialize());
app.use(passport.session());

authroutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
