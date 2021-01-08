function adder() {
    this.adder = function (numberA, numberB) {
        return  numberA + numberB;
    }
}

module.exports = new adder();