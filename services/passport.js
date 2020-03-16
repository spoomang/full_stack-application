const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const uuid = require('uuid');

const Store = require('../db/postgres');

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,   
    }, async (accessToken, refreshToken, profile, done) => {
        const domains = ['hooq.tv'];
        const email = profile.emails[0].value;

        let user;
        if (email.match(new RegExp(`@(${domains.join('|')})$`)) === null) {
            return done('Sorry.Not Allowed!!!!', false);
        } else {
            user = await Store('backstage_users').where({ email }).first();
            if (user) {
                await Store('backstage_users').where({ id: user.id }).update({
                    last_login: new Date(),
                    updated_at: new Date(),
                    google_id: profile.id,
                });
            } else {
                user = {
                    id: uuid.v4(),
                    email,
                    google_id: profile.id,
                    activated: true,
                    last_login: new Date(),
                  };
                await Store('to_do_users').insert(user);
            }
        }
        
        return done(null, user);
    }));

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

passport.deserializeUser(async (id, done) => {
    const user = await Store('to_do_users').where({ id }).first();
    done(null, user);
});
