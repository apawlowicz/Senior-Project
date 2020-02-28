var Hapi = require('hapi');

var port = process.env.port || 3000;

const server = new Hapi.Server({ host: 'localhost', port: 3000});

server.route(require('./lib/routes'));

server.start(function() {
	console.log('Listening on ' + server.info.uri);
});