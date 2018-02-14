'use strict';



var restify = require('restify');

module.exports = function(server) {
  
  /**
   * Register static resources.
   **/
  server.get(/\/*/, restify.serveStatic({
    directory: __dirname + '/app/',
    default: 'index.html'
  }));

};