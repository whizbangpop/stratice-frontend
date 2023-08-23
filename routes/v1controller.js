const Express = require("express");
const Router = Express.Router();

// v1 Routes
const v1_Auth = require('./v1/auth');
Router.use('/auth', v1_Auth);

Router.get('/*', (req, res) => {
    res.send('Invalid or malformed route').status(404);
})

module.exports = Router