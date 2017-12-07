# rpi-door-sensor

The aim of this project is to use a Raspberry Pi 3 and have 4 simple binary
sensors each connected to a door. When a door is opened the state of the sensor
will change from 0 to 1 and this data will be presented visually on a webpage
showing which door is open and which door/s are closed.

## First

Create a simple web server to host the page and route the sensor data.

- Status: Incomplete

## Second

Write the sensor file that will talk to the each sensor and pass the data to the
webpage.

- Status: Incomplete

## Third
Create a webpage with an image of a house plan that will be able to visually
represent each door both open and closed.

- Status: Incomplete


## NPM Packages Used:

[express](https://www.npmjs.com/package/express)
[pigpio](https://www.npmjs.com/package/pigpio)

