// Icon unicode characters can be found at: http://fontawesome.io/icons/
//% weight=100 color=#c2b711 icon="\uf1ec" block="Accelerometer extra" advanced=false
namespace accMagnitude {

    /**
     * Example TS function for extension.
     */
    //% blockId=accmagnitude_example
    //% block
    export function example(): number {
        return 10;
    }

    /**
     * Get the accelerometer magnitude.
     *
     * This function is a shim and the micro:bit runs the C++ version.
     */
    //% blockId=accmagnitude_get_magnitude
    //% block
    //% shim=accMagnitude::get_magnitude
    export function getMagnitude(): number {
        return 1234;
    }
}
