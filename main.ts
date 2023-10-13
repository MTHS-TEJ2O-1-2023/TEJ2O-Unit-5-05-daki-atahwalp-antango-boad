/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Daki A.B
 * Created on: Oct 2023
 * This program makes a traffic light
*/

let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// On button A (turning traffic light on)
input.onButtonPressed(Button.A, function () {
  basic.showIcon(IconNames.Happy)
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
  basic.pause(3000)
  neopixelStrip.show()
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
  basic.pause(2000)
  neopixelStrip.show()
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  basic.pause(1000)
  neopixelStrip.show()
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  basic.pause(1000)
  neopixelStrip.show()
})
