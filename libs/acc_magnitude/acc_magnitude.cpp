#include "pxt.h"

using namespace pxt;

namespace accMagnitude {
    //%
    int get_magnitude() {
        int x = uBit.accelerometer.getX();
        int z = uBit.accelerometer.getY();
        int y = uBit.accelerometer.getZ();
        return (int)sqrtf((x * x) + (y * y) + (z * z));
    }
}
