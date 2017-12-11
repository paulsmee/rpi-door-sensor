'use strict'

var Gpio = require('pigpio').Gpio

var doorstats = {}

function doorOpen(whichDoor, doorState) {
    var randomVar = doorState 
    console.log(whichDoor + ' = ' + randomVar)
    doorstats[whichDoor] = randomVar
}

var door1 = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
})

door1.on('interrupt', function (level) {
    doorOpen('door1', level)
})


var door2 = new Gpio(5, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

door2.on('interrupt', function (level) {
    doorOpen('door2', level)
})

var door3 = new Gpio(6, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

door3.on('interrupt', function (level) {
    doorOpen('door3', level)
})

var door4 = new Gpio(7, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })


door4.on('interrupt', function (level) {
    doorOpen('door4', level)
})

module.exports = doorstats
