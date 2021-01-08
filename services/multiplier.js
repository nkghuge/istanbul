function multiple() {
    this.multiple = function (numberA, numberB) {
        return  numberA * numberB;
    }
}

module.exports = new multiple();