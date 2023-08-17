
//% weight=100 color=#5a97cb icon="\uf2db"
namespace custom {
    // 500 samples, 32 bit each
    let acc_samples_total = 500
    let acc_samples = pins.createBuffer(acc_samples_total * 4)
    let acc_samples_i = 0
    let acc_buffer_full = false

    /**
     * init
     */
    //% block
    export function initCustomCode() {
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
            acc_buffer_full = true
        }
    }

    /**
     * Calculate the total acceleration magnitude.
     */
    //% shim=custom::accelerometer_magnitude
    //% block
    export function accelerometerMagnitude(): number {
        return input.acceleration(Dimension.Strength);
    }

    /**
     * Calculate the average for the entire samples buffer.
     */
    //% block
    export function getCalculatedAverage(): number {
        let average = 0
        let samplesLength = acc_buffer_full ? acc_samples_total : acc_samples_i;
        for (let i = 0; i < samplesLength;  i++) {
            average += acc_samples.getNumber(NumberFormat.Int32LE, i * 4)
        }
        return Math.round(average / samplesLength)
    }

    /**
     * Measure the battery voltage.
     */
    //% block
    export function getBatteryMilliVolts(): number {
        return 3000;
    }
}
