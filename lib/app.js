// Generated by CoffeeScript 1.11.1
(function() {
  var app, express, fs, http, url, user;

  http = require('http');

  user = require('./users.coffee');

  url = require('url');

  fs = require('fs');

  express = require('express');

  app = express();

  app.set('port', 1337);

  app.listen(app.get('port'), function() {});

  console.log("server listening on " + (app.get('port')));

  app.get('/', function(req, res) {});

  app.post('/', function(req, res) {});

  app.put('/', function(req, res) {});

  app["delete"]('/', function(req, res) {
    return user.get("Robin", function(id) {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      return res.end("hello " + id);
    });
  });

}).call(this);