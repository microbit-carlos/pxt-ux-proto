// Icon unicode characters can be found at: http://fontawesome.io/icons/
//% color=#c2b711 weight=100 icon="\uf1ec" block="Accelerometer extra" advanced=false
namespace accMagnitude {

    /**
     * Example TS function for extension.
     */
    //% blockId=accmagnitude_example
    //% block="example"
    export function example(): number {
        return 10;
    }

    /**
     * Get the accelerometer magnitude.
     *
     * This function is a shim and the micro:bit runs the C++ version.
     */
    //% blockId=accmagnitude_get_magnitude
    //% block="accelerometer magnitude"
    //% shim=accMagnitude::get_magnitude
    export function getMagnitude(): number {
        return 1234;
    }
}
