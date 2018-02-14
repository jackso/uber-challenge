'use strict';

var restify = require('restify');
var packageConfig = require('./package');
var port = (process.env.PORT || 5050);

var server = restify.createServer({
  name: packageConfig.name,
  version: packageConfig.version
});

require('./application')(server);

server.listen(port, function listen() {
	console.log('Server running at http://localhost:' + port);	
});