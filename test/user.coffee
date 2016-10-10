should = require 'should'
users = require '../src/users.js'

describe 'my first test list', () ->
  it 'should get a user w/ right parameters', (done)->
    # do smth user
    users.get "Robin", (res) ->
      res.should.equal "Robin"
      done()
