
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


## Wiring it all up

Write the sensor file that will talk to the each sensor and pass the data to the
webpage.

- Status: Incomplete

## Running the Server
Create a webpage with an image of a house plan that will be able to visually
represent each door both open and closed.

- Status: Incomplete


## NPM Packages Used:

[express](https://www.npmjs.com/package/express)
[pigpio](https://www.npmjs.com/package/pigpio)
