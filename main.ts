function isBatteryLow() {
    return custom.getBatteryMilliVolts() < 2400
}

let logging = false
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
custom.init()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles("activity")
datalogger.mirrorToSerial(true)

datalogger.onLogFull(function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    while (true) {
    	
    }
})

input.onButtonPressed(Button.AB, function () {
    logging = !(logging)
})

loops.everyInterval(20, function () {
    custom.captureAccSample()
})

loops.everyInterval(5000, function () {
    if (logging) {
        datalogger.log(datalogger.createCV("activity", custom.getCalculatedAverage()))
    }
})

basic.forever(function () {
    if (logging) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
