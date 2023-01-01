input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        right.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 0)
        basic.pause(500)
        right.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        left.showColor(neopixel.colors(NeoPixelColors.Yellow))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 0)
        basic.pause(500)
        left.showColor(neopixel.colors(NeoPixelColors.Black))
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        basic.pause(500)
    }
})
let strip: neopixel.Strip = null
let left: neopixel.Strip = null
let right: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
    left = strip.range(0, 1)
    right = strip.range(1, 1)
})
