const restify = require ('restify'),
    fs = require ('fs'),
    path = require ('path'),
    connection = require ('./db'),
    port = process.env.port || 3000,
    server = restify.createServer ();

fs.readdirSync (path.join (__dirname, 'app', 'controllers')).forEach ((file) => {
    require (path.join (__dirname, 'app', 'controllers', file)).controller (server);
})

server.listen (port, () => {
    console.info (`server is running on port ${port}`);
})