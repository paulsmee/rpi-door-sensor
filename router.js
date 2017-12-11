'use strict'

var express = require('express')
var router = express.Router()
var doorstats = require('./door-sensors')

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log("Page Access Detected!")
});

// Need to add more routes once we know the functions that are exported from sensor.js
router.get('/sensor/doors', function(req, res, next) {
  res.json(doorstats);
})

module.exports = router
