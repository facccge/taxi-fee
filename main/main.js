module.exports = function main(distance, waitTime) {
    let disFee = 6;
    let timeFee = 0.25*waitTime;
    return ""+Math.round(disFee+timeFee);
};