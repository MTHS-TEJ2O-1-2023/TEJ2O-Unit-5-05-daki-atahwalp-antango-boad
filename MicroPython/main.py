"""
Created by: Daki A.B
Created on: Oct 2023
This module is a traffic light
"""

from microbit import *


# Cleanup
display.clear()
neopixelstrip = neopixel.NeoPixel(pin0, 4)
neopixelstrip[0] = (0, 0, 0)
neopixelstrip[1] = (0, 0, 0)
neopixelstrip[2] = (0, 0, 0)
neopixelstrip[3] = (0, 0, 0)
neopixelstrip.show()
display.show(Image.HAPPY)

# On button A (turning traffic light on)
while True:
    if button_a.was_pressed():
        display.show(Image.HAPPY)
        neopixelstrip[0] = (0, 255, 0)
        neopixelstrip.show()
        sleep(3000)
        neopixelstrip[0] = (0, 0, 0)
        neopixelstrip[1] = (255, 255, 0)
        neopixelstrip.show()
        sleep(1750)
        neopixelstrip[1] = (0, 0, 0)
        neopixelstrip[2] = (255, 0, 0)
        sleep(1000)
        neopixelstrip[2] = (0, 0, 0)
        neopixelstrip.show()
