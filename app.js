const Express = require("express");
const Path = require("node:path");

const Config = require('./config.json');

const Server = Express();


Server.set('views', Path.join(__dirname, 'views'));
Server.set("view engine", "ejs");
Server.use(Express.static(Path.join(__dirname, 'public')));

Server.use('/v1', require('./routes/v1controller'));

Server.get("/", (req, res) => {
    res.render("index");
});

Server.listen(Config.web_server.port, () => {
    console.log(`Listening at ${Config.web_server.url} or http://localhost:${Config.web_server.port}`);
});