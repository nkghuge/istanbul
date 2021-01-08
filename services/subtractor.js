function subtract() {
    this.subtract = function (numberA, numberB) {
        return  numberA - numberB;
    }
}

module.exports = new subtract();