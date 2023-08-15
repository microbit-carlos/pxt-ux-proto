function isBatteryLow () {
    return false
}
input.onButtonPressed(Button.AB, function () {
    logging = !(logging)
})
function startLogging () {
    basic.showIcon(IconNames.Yes)
    while (logging) {
        serial.writeLine("logging")
        basic.pause(2000)
    }
}
let logging = false
logging = false
if (isBatteryLow()) {
    while (true) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # #
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # .
            # . . . #
            # # # # .
            . . . . .
            `)
    }
}
basic.forever(function () {
    if (logging) {
        startLogging()
    }
    basic.showIcon(IconNames.No)
    serial.writeNumber(custom.getMagnitude())
    serial.writeLine("")
    serial.writeNumber(accMagnitude.getMagnitude())
    serial.writeLine("\n")
})
