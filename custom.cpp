#include "pxt.h"

using namespace pxt;

namespace custom {
    //%
    int accelerometer_magnitude() {
        int x = uBit.accelerometer.getX();
        int z = uBit.accelerometer.getY();
        int y = uBit.accelerometer.getZ();
        return (int)sqrtf((x * x) + (y * y) + (z * z));
    }
}
