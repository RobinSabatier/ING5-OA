# Import a module
http = require 'http'
user = require './users.coffee'
url = require 'url'
fs = require 'fs'
express = require 'express'

app = express()
# Declare an http server
app.set 'port', 1337

app.listen app.get('port'), () ->

  #user.get "Robin", (id) ->
  # Write a response header
  #res.writeHead 200,'Content-Type': 'text/plain'

  # Write a response content
  #res.end('Hello World\n');`
  #res.end "hello #{id}" # "hello" + id

  app.get '/hello/:name', (req, res) ->
    res.send "Hello #{req.params.name}"

console.log "server listening on #{app.get 'port'}"
