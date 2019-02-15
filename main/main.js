module.exports = function main(distance, waitTime) {
    let disFee = 6;
    if (distance > 2 && distance <= 8) {
        disFee = 6 + 0.8 * (distance - 2);
    } else if (distance > 8) {
        disFee = 6 + 0.8 * (distance - 2) + 0.4 * (distance - 8);
    }
    let timeFee = 0.25 * waitTime;
    return "" + Math.round(disFee + timeFee);
};