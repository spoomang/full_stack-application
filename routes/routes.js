
const passport = require('passport');
const Authenticated = require('../middlewares/Authenticated');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
    app.get('/signin/google/callback', passport.authenticate('google'), (req, res) => {
        res.send({hi: 'There, signed in lah'});
    });
    app.get('/t', Authenticated, (req, res) => {
        res.send({ temp: 'temp' });
    });

    app.get('/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    })
};
