datalogger.onLogFull(function () {
    logFull = true
})

input.onButtonPressed(Button.AB, function () {
    logging = !(logging)
    if (logging) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
    } else {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
    }
})

let logging = false
let logFull = false
if (custom.getBatteryMilliVolts() < 2400) {
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
custom.initCustomCode()
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
datalogger.setColumnTitles("activity")
datalogger.mirrorToSerial(true)

loops.everyInterval(20, function () {
    custom.captureAccSample()
})

basic.forever(function () {
    if (logging) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})

loops.everyInterval(5000, function () {
    if (logging && !(logFull)) {
        datalogger.log(datalogger.createCV("activity", custom.getCalculatedAverage()))
    }
})
