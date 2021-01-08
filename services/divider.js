function divide() {
    this.divide = function (numberA, numberB) {
        if(numberB==0) {
            return;
        }
        return  numberA / numberB;
    }
}

module.exports = new divide();