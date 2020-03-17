const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('user');

passport.use(new GoogleStrategy({
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true,
}, async (accessToken, refreshToken, profile, done) => {
        let existingUser = await User.findOne({ googleId: profile.id });

        if(!existingUser) {
            // Create User
            existingUser = await new User({ googleId: profile.id }).save();
        }

        done(null, existingUser);
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);

    done(null, user);
})
