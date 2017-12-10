'use strict'

var express = require('express')
var router = express.Router()
var doorstats = require('./door-sensors')

router.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log("Page Access Detected!")
});

// Need to add more routes once we know the functions that are exported from sensor.js
router.get('/sensor/door/door1', function(req, res) {
  res.send(doorstats.door1Status+'');
})

router.get('/sensor/door/door2', function(req, res) {
  res.send(doorstats.door2Status+'');
})

router.get('/sensor/door/door3', function(req, res) {
  res.send(doorstats.door3Status+'');
})

router.get('/sensor/door/door4', function(req, res) {
  res.send(doorstats.door4Status+'');
})

module.exports = router
