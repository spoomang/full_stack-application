const passport = require('passport');

module.exports = app => {
    app.get('/api/feature', (req, res) => {
        res.send(req.user);
    });
}
