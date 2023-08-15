#include "pxt.h"

using namespace pxt;

namespace accMagnitude {

    //%
    int get_magnitude() {
        int x = 10; //uBit.accelerometer.getX();
        int z = 20; //uBit.accelerometer.getY();
        int y = 30; //uBit.accelerometer.getZ();
        return x + y + z;
        //return (int)sqrtf(x * x + y * y + z * z);
    }
}
