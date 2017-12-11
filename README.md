
# rpi-door-sensor

The aim of this project is to use a Raspberry Pi 3 and have 4 simple binary
sensors each connected to a door. When a door is opened the state of the sensor
will change from 0 to 1 and this data will be presented visually on a webpage
showing which door is open and which door/s are closed.

## Installation

First thing you need to do is setup your Raspberry Pi and Install Node.js.
- If you have not setup your Raspberry Pi then [Dave Johnson](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/) provides a good beginners guide to running through this process.

- If you have already setup the OS for your Raspberry Pi then you can follow the below to install Node.js
```shell
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt install nodejs
```
To confirm you have correctly installed Node.js and NPM, run the following
```shell
$ node -v
v8.9.3
$ npm -v
5.5.1
```

Next thing to install is pigpio C library, some versions of Raspbian come pre-installed with this so you may not need to install it. If you do need to install it just run the following
```shell
$ sudo apt-get update
$ sudo apt-get install pigpio
```

Now that you have the basics you will then need to do is clone this repo into the desired folder. I like to keep all my code together so it's easier to track of `/home/pi/src/`
```shell
$ git clone https://github.com/paulsmee/rpi-door-sensor.git
```
This repo has the following dependancies:
[express](https://www.npmjs.com/package/express)
[pigpio](https://www.npmjs.com/package/pigpio)
[lodash](https://www.npmjs.com/package/lodash)

Install the dependancies by running 
```shell
$ sudo npm install
```

If you do encounter error on installing any of the packages - most likely 'pigpio' just run the following
```shell
$ sudo npm install pigpio unsafe-perm
```

From the software side, you should be all set to go.

## Wiring it all up

The wiring on these sensors is quite straight forward. I'm using magnetic reed switches that are N/O (Normally Open) but you can use any 2 wire temporary switch.

For each door you will need the following

1 x 1k ohm resistor

1 x 10k ohm resistor

1 x magnetic reed switch

Additionally you will need a Bread Board, some jumper wires and of course a Raspberry Pi

## Running the Server
Create a webpage with an image of a house plan that will be able to visually
represent each door both open and closed.

- Status: Incomplete


## NPM Packages Used:

[express](https://www.npmjs.com/package/express)
[pigpio](https://www.npmjs.com/package/pigpio)
