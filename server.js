'use strict'

var express = require('express')
var server = express()

server.use(express.static('public'))
server.use(require('./router'))

var port = 8000
server.listen(port, function() {
  console.log('The server is listening on port ' + port)
})
