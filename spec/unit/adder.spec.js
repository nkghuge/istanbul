var adder = require('../../services/adder');

describe("adder tests ", function() {
    var _numberA;
    var _numberB;

    it("should return addition of numberA and numberB", function() {
        _numberA = 6;
        _numberB = 2;
        var result = adder.adder(_numberA, _numberB);

        expect(result).toEqual(8);
    });
});