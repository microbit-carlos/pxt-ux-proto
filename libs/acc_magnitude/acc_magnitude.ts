// Icon unicode characters can be found at: http://fontawesome.io/icons/
//% color=#c2b711 weight=100 icon="\uf1ec" block="Accelerometer extra" advanced=false
namespace acc_magnitude {

    /**
     * Example TS function for extension.
     */
    //% blockId=acc_magnitude_example
    //% block="example"
    export function example(): number {
        return 10;
    }

    /**
     * Get the accelerometer magnitude.
     *
     * This function is a shim and the micro:bit runs the C++ version.
     *
    % blockId=acc_magnitude_get_magnitude
    % block="acc magnitude"
    % shim=acc_magnitude::get_magnitude
    export function getMagnitude(): number {
        return 1234;
    }
    */
}
