var Gpio = require('pigpio').Gpio

var doorstats = {}

function door1Open(d1) {
    var randomVar
    randomVar = d1 / 1023 * 5
    console.log(randomVar + 'Random Variable')
}

var door1 = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

door1.on('interrupt', function (level) {
    var door1Status = door1Open(level)
    doorstats.doorOne = door1Status
    console.log(level + 'Raw Data')
})


// var door2 = new Gpio(5, {
//     mode: Gpio.INPUT,
//     pullUpDown: Gpio.PUD_DOWN,
//     edge: Gpio.EITHER_EDGE
//   })
//
// door2.on('interrupt', function (level) {
//   if (level == 1) {
//     console.log('Door 2 is open')
//   } else {
//     console.log('Door 2 is currently closed')
//   }
// })
//
// var door3 = new Gpio(6, {
//     mode: Gpio.INPUT,
//     pullUpDown: Gpio.PUD_DOWN,
//     edge: Gpio.EITHER_EDGE
//   })
//
// door3.on('interrupt', function (level) {
//   if (level == 1) {
//     console.log('Door 3 is open')
//   } else {
//     console.log('Door 3 is currently closed')
//   }
// })
//
// var door4 = new Gpio(7, {
//     mode: Gpio.INPUT,
//     pullUpDown: Gpio.PUD_DOWN,
//     edge: Gpio.EITHER_EDGE
//   })
//
//
// door4.on('interrupt', function (level) {
//   if (level == 1) {
//     console.log('Door 4 is open')
//   } else {
//     console.log('Door 4 is currently closed')
//   }
// })
//
// console.log(door3)
//
//
// doorstats.doorTwo = door2
// doorstats.doorThree = door3
// doorstats.doorFour = door4

module.exports = doorstats

