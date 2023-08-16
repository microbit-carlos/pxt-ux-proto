
//% weight=100 color=#218cac icon="\uf2db"
namespace custom {
    // 500 samples, 32 bit each
    let acc_samples_total = 500
    let acc_samples = pins.createBuffer(acc_samples_total * 4)
    let acc_samples_i = 0

    /**
     * init
     */
    //% block
    export function init() {
        acc_samples.fill(0);
    }

    /**
     * Add acc sample to the buffer.
     * 
     * This function takes ~2ms
     */
    //% block
    export function captureAccSample(): void {
        let accMag = accelerometerMagnitude()
        serial.writeNumber(accMag)
        serial.writeLine("")
        acc_samples.setNumber(NumberFormat.Int32LE, acc_samples_i * 4, accMag)
        acc_samples_i += 1
        if (acc_samples_i >= acc_samples_total) {
            acc_samples_i = 0
        }
    }

    /**
     * Calculate the total acceleration magnitude.
     */
    //% shim=custom::accelerometer_magnitude
    //% block
    export function accelerometerMagnitude(): number {
        return 12345;
    }

    /**
     * Calculate the average for the entire samples buffer.
     * TODO: Buffer is zero out on init, so calls to this function before it's
     *       full will show a lower average than expected
     */
    //% block
    export function getCalculatedAverage(): number {
        let average = 0
        for (let i = 0; i < acc_samples_total;  i++) {
            average += acc_samples.getNumber(NumberFormat.Int32LE, i * 4)
        }
        return Math.round(average / acc_samples_total)
    }

    /**
     * Measure the battery voltage.
     */
    //% block
    export function getBatteryMilliVolts(): number {
        return 3000;
    }
}
