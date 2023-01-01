input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 255, 0)
        basic.pause(500)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 0)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 255, 0)
        basic.pause(500)
        cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 0)
        basic.pause(500)
    }
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
