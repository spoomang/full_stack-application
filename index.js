const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');

mongoose.connect(keys.mongoDbURI);

const authroutes = require('./routes/authroutes');
const featureroutes = require('./routes/feature');

const app = express();

app.use(cookieSession({
        maxAge: 1 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey],
    }));

app.use(passport.initialize());
app.use(passport.session());

authroutes(app);
featureroutes(app);

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(__dirname, 'client', 'build', 'index.html');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
