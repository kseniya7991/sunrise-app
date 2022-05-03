export default function calcProbability(weatherId) {
    if (!weatherId) {
        return false;
    }

    if (weatherId > 200 && weatherId < 300) {
        return 10;
    } else if (weatherId > 300 && weatherId < 500) {
        return 10;
    } else if (weatherId > 500 && weatherId < 600) {
        return 10;
    } else if (weatherId > 600 && weatherId < 800) {
        return 60;
    } else if (800) {
        return 99;
    } else if (801) {
        return 95;
    } else if (802) {
        return 80;
    } else if (803) {
        return 50;
    } else if (804) {
        return 20;
    }
}
