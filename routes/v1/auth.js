const Express = require("express");
const Router = Express.Router();
const Axios = require("axios");

Router.get('/', (req, res) => {
    res.send("test")
})

module.exports = Router